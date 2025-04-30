'use strict';
import { DataTypes } from 'sequelize';

export default (sequelize) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			first_name: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			last_name: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(100),
				allowNull: false,
				unique: true,
			},
			phone_number: {
				type: DataTypes.STRING(15),
			},
			country_code: {
				type: DataTypes.STRING(4),
			},
			is_subscribred: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		},
		{
			tableName: 'users',
			timestamps: true,
			modelName: `UserModel`,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	User.associate = function (models) {
		User.hasMany(models.Notification, { foreignKey: 'user_id' });
		User.belongsToMany(models.NotificationType, {
			through: models.UserNotificationPreference,
			foreignKey: 'user_id',
			otherKey: 'notification_type_id',
		});
	};

	return User;
};
