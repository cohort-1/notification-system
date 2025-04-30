import sgMail from '@sendgrid/mail';
// eslint-disable-next-line no-undef
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

export default SENDGRID_API_KEY ? sgMail.setApiKey(SENDGRID_API_KEY) : null;
