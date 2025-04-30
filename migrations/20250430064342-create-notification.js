'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('notifications', {
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
			variables: {
				type: Sequelize.JSON,
			},
			status: {
				type: Sequelize.STRING,
			},
			retry_count: {
				type: Sequelize.INTEGER,
			},
			last_success_at: {
				type: Sequelize.DATE,
			},
			last_failure_at: {
				type: Sequelize.DATE,
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
		await queryInterface.dropTable('notifications');
	},
};
