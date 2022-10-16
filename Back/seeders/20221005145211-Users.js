'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
      companieId: '1',
      firstName: 'Jon',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: bcrypt.hashSync('p@ssword', 8),
      phone: '0102030405',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Us',
      lastName: 'Er',
      email: 'user@example.com',
      password: bcrypt.hashSync('p@ssword', 8),
      phone: '0102030405',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ad',
      lastName: 'Min',
      email: 'admin@example.com',
      password: bcrypt.hashSync('p@ssword', 8),
      phone: '0102030405',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
