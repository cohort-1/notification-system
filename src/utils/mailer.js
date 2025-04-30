import SendGrid from '../config/sendgrid.js';
// eslint-disable-next-line no-undef
const verifiedSender = process.env.SENDGRID_VERIFIED_SENDER;

const mailer = ({ to, html, text, subject, attachments = null }) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (SendGrid) {
				return reject('Sendgrid not setup');
			}
			const msg = { to, from: { email: verifiedSender, name: 'Truck Parking Club' }, subject, html, text };
			if (attachments) {
				msg.attachments = attachments;
			}
			await SendGrid.send(msg);
			resolve();
		} catch (err) {
			reject(err?.response?.body?.errors);
		}
	});
};

export default mailer;
