'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
      firstName: 'Jon',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'p@ssword',
      phone: '0102030405',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jane',
      lastName: 'Dae',
      email: 'jane.dae@example.com',
      password: 'p@ssword',
      phone: '0102030405',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Nick',
      lastName: 'Mark',
      email: 'nick.mark@example.com',
      password: 'p@ssword',
      phone: '0102030405',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
