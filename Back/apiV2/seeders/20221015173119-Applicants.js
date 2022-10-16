'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Applicants', [
      {
      advertisementId: 1,
      userid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      advertisementId: 2,
      userid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      advertisementId: 3,
      userid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      advertisementId: 1,
      userid: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Applicants', null, {});
  }
};
