'use strict';
import { DataTypes } from 'sequelize';

export default (sequelize) => {
	const UserNotificationPreference = sequelize.define(
		'UserNotificationPreference',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			user_id: {
				type: DataTypes.INTEGER,
			},
			notification_type_id: {
				type: DataTypes.INTEGER,
			},
			subscription_status: {
				type: DataTypes.INTEGER,
				comment: `0 = none, 1 = all, 2 = email, 3 = sms`,
			},
		},
		{
			tableName: 'user_notification_preferences',
			timestamps: true,
			modelName: `UserNotificationPreferenceModel`,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	UserNotificationPreference.associate = function (models) {
		UserNotificationPreference.belongsTo(models.User, { foreignKey: 'user_id' });
		UserNotificationPreference.belongsTo(models.NotificationType, { foreignKey: 'notification_type_id' });
	};

	return UserNotificationPreference;
};
