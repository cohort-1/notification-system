'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('notification_types', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			tag: {
				type: Sequelize.STRING(20),
				unique: true,
			},
			via_email: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			email_subject: {
				type: Sequelize.STRING,
			},
			email_template: {
				type: Sequelize.TEXT,
			},
			via_sms: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			sms_template: {
				type: Sequelize.TEXT,
			},
			template_variables: {
				type: Sequelize.JSON,
			},
			is_active: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
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
		await queryInterface.dropTable('notification_types');
	},
};
