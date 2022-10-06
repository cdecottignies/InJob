'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Advertisements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descShort: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descLong: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      wages: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      place: {
        type: Sequelize.JSON,
        allowNull: false
      },
      degree: {
        type: Sequelize.ENUM('BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5'),
        allowNull: false
      },
      workingTime: {
        type: Sequelize.ENUM('flexible', '9 to 5'),
        allowNull: false
      },
      workingLocation: {
        type: Sequelize.ENUM('remote', 'office', 'hybrid'),
        allowNull: false
      },
      hybrid: {
        type: Sequelize.ENUM('0', '1 day remote, 4 days office', '2 days remote, 3 days office', '3 days remote, 2 days office', '4 days remote, 1 day office'),
        defaultValue: '0',
        allowNull: false
      },
      contractType: {
        type: Sequelize.ENUM('CDI', 'CDD', 'ALTERNANCE'),
        allowNull: false
      },
      contractLength: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contractStart: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Advertisements');
  }
};