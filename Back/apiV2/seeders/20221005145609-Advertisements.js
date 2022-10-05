'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Advertisements', [{
      title: 'Dev JS',
      descShort: 'CDI for master of JS',
      descLong: 'As a JS Dev you will workd Node and Express',
      wages: 100000000,
      place: JSON.stringify([
        {
          "city": "Lille",
          "street": "Massena"
        }
      ]),
      workingTime: 'flexible',
      workingLocation: 'remote',
      hybrid: '0',
      contractType: 'CDI',
      contractLength: '6 mois',
      contractStart: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      title: 'Dev PHP',
      descShort: 'CDI for PHP lover',
      descLong: 'As a PHP Dev you will work with Laravel and sails',
      wages: 420000000,
      place: JSON.stringify([{
        city: 'Lille',
        street: 'Louis XIV'
      }]),
      workingTime: 'flexible',
      workingLocation: 'remote',
      hybrid: '0',
      contractType: 'CDI',
      contractLength: '42 mois',
      contractStart: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      title: 'Dev Ruby',
      descShort: 'CDI for cool Japan people',
      descLong: 'As a PHP Dev you will work with Ruby on Rails',
      wages: 4200000000,
      place: JSON.stringify([{
        city: 'Lille',
        street: 'Moon'
      }]),
      workingTime: 'flexible',
      workingLocation: 'remote',
      hybrid: '1 day remote, 4 days office',
      contractType: 'Alternance',
      contractLength: '42 mois',
      contractStart: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Advertisements', null, {});
  }
};
