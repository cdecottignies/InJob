'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Companies', [
      {
       name: 'Microsoft',
       siret: 'ERA56YGVIU',
        numEmploye: 1000,
       desc: 'I am Microsoft',
       link: 'https://www.microsoft.com/en-us',
       logo: 'jiddna',
       createdAt: new Date(),
       updatedAt: new Date()
     }
     ,
     {
      name: 'IBM',
      siret: 'zfboz_çç_hàah',
      numEmploye: 1000,
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
