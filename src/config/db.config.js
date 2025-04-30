// eslint-disable-next-line no-undef
const ENV = process.env;
import 'dotenv/config';

export default {
	development: {
		username: ENV.DB_USER,
		password: ENV.DB_PASSWORD,
		database: ENV.DB_NAME,
		host: ENV.DB_HOST,
		port: ENV.DB_PORT,
		dialect: ENV.DB_DIALECT || 'postgres',
	},
	production: {
		username: ENV.DB_USER,
		password: ENV.DB_PASSWORD,
		database: ENV.DB_NAME,
		host: ENV.DB_HOST,
		port: ENV.DB_PORT,
		dialect: ENV.DB_DIALECT || 'postgres',
	},
};
