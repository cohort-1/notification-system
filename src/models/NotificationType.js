'use strict';
import { DataTypes } from 'sequelize';

export default (sequelize) => {
	const NotificationType = sequelize.define(
		'NotificationType',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING,
			},
			tag: {
				type: DataTypes.STRING(20),
			},
			via_email: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
			email_subject: {
				type: DataTypes.STRING,
			},
			email_template: {
				type: DataTypes.TEXT,
			},
			via_sms: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
			sms_template: {
				type: DataTypes.TEXT,
			},
			template_variables: {
				type: DataTypes.JSON,
			},
			is_active: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		},
		{
			tableName: 'notification_types',
			timestamps: true,
			modelName: `NotificationTypeModel`,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	NotificationType.associate = function (models) {
		NotificationType.hasMany(models.Notification, { foreignKey: 'notification_type_id' });
		NotificationType.belongsToMany(models.User, {
			through: models.UserNotificationPreference,
			foreignKey: 'notification_type_id',
			otherKey: 'user_id',
		});
	};

	return NotificationType;
};
