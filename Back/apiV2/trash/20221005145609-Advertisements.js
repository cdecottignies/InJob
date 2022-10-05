'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Advertisements', [{
      title: 'Dev JS',
      descShort: 'CDI for master of JS',
      decLong: 'As a JS Dev you will workd Node and Express',
      wages: 100000000,
      place: {
        city: Lille,
        street: Massena
      },
      workingTime: 'flexible',
      workingLocation: 'remote',
      hybrid: '0',
      contractType: 'CDI',
      contractLength: '6 mois',
      contractStart: '1 Janvier 2020',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    // ,
    // {
    //   firstName: 'Jane',
    //   lastName: 'Dae',
    //   email: 'jane.dae@example.com',
    //   password: 'p@ssword',
    //   phone: 0102030405,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   firstName: 'Nick',
    //   lastName: 'Mark',
    //   email: 'nick.mark@example.com',
    //   password: 'p@ssword',
    //   phone: 0102030405,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Advertisements', null, {});
  }
};
