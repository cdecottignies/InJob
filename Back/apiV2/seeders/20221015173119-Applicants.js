'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Applicants', [
      {
      advertisementId: 1,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      advertisementId: 2,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      advertisementId: 3,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      advertisementId: 1,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Applicants', null, {});
  }
};
