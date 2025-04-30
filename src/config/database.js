import { Sequelize } from 'sequelize';

// eslint-disable-next-line no-undef
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT = 'postgres' } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	dialect: DB_DIALECT,
	logging: false
});

export default sequelize;
