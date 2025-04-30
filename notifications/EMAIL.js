// eslint-disable-next-line no-undef
const verifiedSender = process.env.SENDGRID_VERIFIED_SENDER || 'info@truckparkingclub.com';
const sgMail = require('@sendgrid/mail');
// eslint-disable-next-line no-undef
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
/*  */
const { notNull } = require('../utils/text');
/*  */
exports.mailer = ({ to, html, text, subject, attachments = null }) => {
	return new Promise(async (resolve, reject) => {
		try {
			const { isProd } = require('../utils');
			subject = isProd() ? subject : `TEST MODE: ${subject}`;
			const msg = { to, from: { email: verifiedSender, name: 'Truck Parking Club' }, subject, html, text };
			if (notNull(attachments)) {
				msg.attachments = attachments;
			}
			await sgMail.send(msg);
			resolve();
		} catch (err) {
			reject(err?.response?.body?.errors);
		}
	});
};
