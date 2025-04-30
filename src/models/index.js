import Sequelize from 'sequelize';
import sequelize from '../config/database.js';

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
