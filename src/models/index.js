import Sequelize from 'sequelize';
import sequelize from '../config/database.js';
import UserModel from './User.js';
import NotificationTypeModel from './NotificationType.js';

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = UserModel(sequelize);
db.NotificationType = NotificationTypeModel(sequelize);

export default db;
