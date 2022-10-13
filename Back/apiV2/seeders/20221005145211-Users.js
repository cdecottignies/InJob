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
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jane',
      lastName: 'Dae',
      email: 'jane.dae@example.com',
      password: bcrypt.hashSync('p@ssword', 8),
      phone: '0102030405',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Nick',
      lastName: 'Mark',
      email: 'nick.mark@example.com',
      password: bcrypt.hashSync('p@ssword', 8),
      phone: '0102030405',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
