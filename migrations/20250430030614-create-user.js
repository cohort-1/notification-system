'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			first_name: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			last_name: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING(100),
				allowNull: false,
				unique: true,
			},
			phone_number: {
				type: Sequelize.STRING(15),
			},
			country_code: {
				type: Sequelize.STRING(4),
			},
			is_subscribred: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('users');
	},
};
