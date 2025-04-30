'use strict';
import { DataTypes } from 'sequelize';

export default (sequelize) => {
	const Notification = sequelize.define(
		'Notification',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			user_id: {
				type: DataTypes.INTEGER,
			},
			notification_type_id: {
				type: DataTypes.INTEGER,
			},
			variables: {
				type: DataTypes.JSON,
			},
			status: {
				type: DataTypes.STRING,
			},
			retry_count: {
				type: DataTypes.INTEGER,
			},
			last_success_at: {
				type: DataTypes.DATE,
			},
			last_failure_at: {
				type: DataTypes.DATE,
			},
		},
		{
			tableName: 'notifications',
			timestamps: true,
			modelName: `NotificationModel`,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	Notification.associate = function (models) {
		Notification.belongsTo(models.User, { foreignKey: 'user_id' });
		Notification.belongsTo(models.NotificationType, { foreignKey: 'notification_type_id' });
	};

	return Notification;
};
