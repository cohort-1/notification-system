'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('user_notification_preferences', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id',
				},
			},
			notification_type_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'notification_types',
					key: 'id',
				},
			},
			subscription_status: {
				type: Sequelize.INTEGER,
				comment: `0 = none, 1 = all, 2 = email, 3 = sms`,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('user_notification_preferences');
	},
};
