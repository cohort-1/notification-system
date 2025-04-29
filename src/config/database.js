import { Sequelize } from "sequelize";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT = "postgres" } =
  // eslint-disable-next-line no-undef
  process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

export default sequelize;

