'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Advertisements', 'workingLocation', {
        type: Sequelize.ENUM('remote', 'office', 'hybrid'),
        allowNull: false
    });
    await queryInterface.addColumn('Advertisements', 'hybrid', {
        type: Sequelize.ENUM('1 day remote, 4 days office', '2 days remote, 3 days office', '3 days remote, 2 days office', '4 days remote, 1 day office'),
        allowNull: false
    });
    await queryInterface.addColumn('Advertisements', 'contractType', {
        type: Sequelize.ENUM('CDI', 'CDD', 'ALTERNANCE'),
        allowNull: false
    });
    await queryInterface.addColumn('Advertisements', 'contractLength', {
        type: Sequelize.STRING,
        allowNull: false
    });
    await queryInterface.addColumn('Advertisements', 'contractStart', {
        type: Sequelize.DATEONLY,
        allowNull: false

    });
    await queryInterface.removeColumn('Advertisement', 'workingTime');
    await queryInterface.addColumn('Advertisements', 'workingTime', {
      type: Sequelize.ENUM('remote', 'office', 'hybrid'),
      allowNull: false
    });
    await queryInterface.removeColumn('Advertisements', 'descshort');
    await queryInterface.removeColumn('Advertisements', 'descshort');
    await queryInterface.addColumn('Advertisements', 'descLong', {
      type: Sequelize.STRING,
        allowNull: false
    });
    await queryInterface.addColumn('Advertisements', 'descShort', {
      type: Sequelize.STRING,
        allowNull: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Advertisements');
  }
};