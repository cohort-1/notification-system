const { footer } = require('./helpers/_footer');
/* eslint-disable-next-line no-undef */
const assetsBaseUrl = process.env.EMAIL_ASSETS_BASE_URL;
/*  */
const fs = require('fs');
const path = require('path');
const { notNull, notNullV2 } = require('../utils/text');
const { sendSMS } = require('./SMS');
const { mailer } = require('./EMAIL');
const { NOTIFICATION_DISABLE_TYPE } = require('../config/model_constants');
const { getNotificationIdByTemplate, isValidNotificationId } = require('../config/client-notification-controls');
/* Function to get all files starting with _ and ending with .js */
function getProcessedFileNames(directory) {
	return new Promise((resolve, reject) => {
		fs.readdir(directory, (err, files) => {
			if (err) {
				return reject(err);
			}
			/* Filter files that start with an underscore and have a .js extension */
			const filteredFiles = files.filter((file) => file.startsWith('_') && file.endsWith('.js') && fs.lstatSync(path.join(directory, file)).isFile());
			/* Remove _ and .js from the file names */
			const processedFileNames = filteredFiles.map((file) => file.slice(1, -3));
			resolve(processedFileNames);
		});
	});
}
const SMS_FOOTER = `\r\nBOOK at thousands of locations, ADD your location suitable for truck parking or REFER a property at TruckParkingClub.com`;
/* Get the current directory */
/* eslint-disable-next-line no-undef */
const currentDirectory = __dirname;
let notifications = [];
const notificationPkg = [];
getProcessedFileNames(currentDirectory)
	.then((files) => {
		notifications = files;
		notifications.forEach((file) => {
			const pkg = require(path.join(currentDirectory, `_${file}.js`));
			notificationPkg[file] = pkg;
		});
	})
	.catch((err) => {
		console.error('Error reading directory:', err);
	});

exports.sendNotification = async ({ user_id, notification, data, emails, phone_numbers, attachments }) => {
	try {
		if (!notifications.includes(notification)) {
			console.log('notification not found :>> ', notification);
			return;
		}
		const { isSmsAllowed, isEmailAllowed } = await precheck({ user_id, notification });
		if (!isSmsAllowed && !isEmailAllowed) {
			return; /* user have disabled notifications */
		}

		if (isSmsAllowed && notNull(phone_numbers)) {
			const smsData = notificationPkg[notification]?.sms(data, SMS_FOOTER);
			if (notNullV2(smsData)) {
				try {
					await sendSMS({ phone_numbers, smsData });
				} catch (err) {
					logNotificationFailure({ content: smsData, phone_numbers });
				}
			}
		}
		if (isEmailAllowed && notNull(emails)) {
			const subject = notificationPkg[notification].subject(data);
			const html = notificationPkg[notification].email({ data, footer, assetsBaseUrl });
			try {
				await mailer({ to: emails, html, subject, attachments });
			} catch (err) {
				logNotificationFailure({ content: html, emails });
			}
		}
		postCheck();
	} catch (err) {
		console.log('error while sending notification :>> ', err);
	}
};

async function precheck({ user_id, notification }) {
	const { NotificationSettingsModel } = require('./../models');
	const notification_id = getNotificationIdByTemplate(notification);
	let userNotificationPreference = NOTIFICATION_DISABLE_TYPE.NONE;
	if (notNull(user_id) && notNull(notification_id) && isValidNotificationId(notification_id)) {
		const setting = await NotificationSettingsModel.findOne({ raw: true, where: { notification_id, user_id } });
		userNotificationPreference = setting?.disable_type ?? NOTIFICATION_DISABLE_TYPE.NONE;
	}
	const isSmsAllowed = ![NOTIFICATION_DISABLE_TYPE.SMS, NOTIFICATION_DISABLE_TYPE.BOTH].includes(userNotificationPreference);
	const isEmailAllowed = ![NOTIFICATION_DISABLE_TYPE.EMAIL, NOTIFICATION_DISABLE_TYPE.BOTH].includes(userNotificationPreference);
	return { isSmsAllowed, isEmailAllowed };
}

// eslint-disable-next-line no-unused-vars
function postCheck(notification) {
	/* save to DB, alert some or do anything if needed  */
	return true;
}

// eslint-disable-next-line no-unused-vars
function logNotificationFailure({ content, phone_numbers, emails }) {}
