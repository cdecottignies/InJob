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
       logo: 'jiddna'
     }
     ,
     {
      name: 'IBM',
      SIRET: 'zfboz_çç_hàah',
      desc: 'I am IBM',
      link: 'https://www.ibm.com/us-en/',
      logo: 'dzddzzda'
    }
    ,
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Companies', null, {});
  }
};
