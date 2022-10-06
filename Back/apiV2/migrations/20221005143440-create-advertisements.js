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
        type: Sequelize.ENUM('remote', 'office'),
        allowNull: false
      },
      contractType: {
        type: Sequelize.ENUM('CDI', 'CDD', 'ALTERNANCE'),
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
      },
      published: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Advertisements');
  }
};