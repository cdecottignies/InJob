'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Applicants', [{
      userId: 1,
      advertisementId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      userId: 1,
      advertisementId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      userId: 1,
      advertisementId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      userId: 3,
      advertisementId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Applicants', null, {});
  }
};
