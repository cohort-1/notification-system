// eslint-disable-next-line no-undef
const accountSid = process.env.TWILIO_ACCOUNT_SID;
// eslint-disable-next-line no-undef
const authToken = process.env.TWILIO_AUTH_TOKEN;
// eslint-disable-next-line no-undef
const messageSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
// eslint-disable-next-line no-undef
const bulkMessageSid = process.env.TWILIO_BULK_ACCOUNT_SID;
const client = accountSid && authToken ? require('twilio')(accountSid, authToken) : null;
/*  */
const { isNull, phoneFormatFormatted, checkArray } = require('../utils/text');

exports.sendSMS = async function ({ phone_numbers, smsData, is_bulk = false }) {
	try {
		if (isNull(client)) {
			console.log('smsData :>> ', smsData);
			return;
		}
		if (!Array.isArray(phone_numbers)) {
			phone_numbers = [phone_numbers];
		}
		if (!checkArray(phone_numbers)) return;
		for (let phone_number of phone_numbers) {
			if (isNull(phone_number)) continue;
			// Ensure the phone number starts with +1
			if (!phone_number.startsWith('+1')) {
				phone_number = '+1' + phone_number.replace(/^\+/, '');
			}
			if (!phoneFormatFormatted.test(phone_number)) continue;
			await client.messages.create({
				body: smsData,
				messagingServiceSid: is_bulk ? bulkMessageSid : messageSid,
				to: phone_number,
			});
		}
		return;
	} catch (err) {
		console.log('error while sending SMS');
	}
};
