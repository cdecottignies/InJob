'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Companies', [
      {
       name: 'Microsoft',
       SIRET: 'ERA56YGVIU',
       desc: 'I am Microsoft',
       link: 'https://www.microsoft.com/en-us',
       logo: 'jiddna',
       createdAt: new Date(),
       updatedAt: new Date()
     }
     ,
     {
      name: 'IBM',
      SIRET: 'zfboz_çç_hàah',
      desc: 'I am IBM',
      link: 'https://www.ibm.com/us-en/',
      logo: 'dzddzzda',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Companies', null, {});
  }
};