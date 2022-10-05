'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Advertisement', 'workingTime');
    await queryInterface.addColumn('Advertisements', 'workingTime', {
      type: Sequelize.ENUM('remote', 'office', 'hybrid'),
      allowNull: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Advertisements');
  }
};