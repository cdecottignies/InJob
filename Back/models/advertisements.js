'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

/**
 * @swagger
 * components:
 *   schemas:
 *     Advertisements:
 *       type: object
 *       required:
 *         - companieId
 *         - userId
 *         - title
 *         - descShort
 *         - descLong
 *         - wages
 *         - place
 *         - degree
 *         - workingTime
 *         - workingLocation
 *         - contractType
 *         - contractStart
 *       properties:
 *         companieId:
 *           type: integer
 *           description: Link an advert to a companie
 *         userId:
 *           type: integer
 *           description: Link an advert to user that created it
 *         title:
 *           type: string
 *         descShort:
 *           type: string
 *         descLong:
 *           type: string
 *         wages:
 *           type: integer
 *           description: 1200000 = 1200,00€
 *         place:
 *           type: object
 *           properties:
 *             city:
 *               type: string
 *             street:
 *               type: string
 *         degree:
 *           type: string
 *           enum: [BAC+1, BAC+2, BAC+3, BAC+4, BAC+5]
 *         workingTime:
 *           type: string
 *           enum: [flexible, 9 to 5]
 *         workingLocation:
 *           type: string
 *           enum: [remote, office]
 *         contractType:
 *           type: string
 *           enum: [CDI, CDD, ALTERNANCE]
 *         contractStart:
 *           type: string
 *           description: period as date, 6 Mai 2023
 *         createdAt:
 *          type: Date
 *          default: Today
 *         updatedAt:
 *           type: Date
 *           default: Today
 *       example:
 *         companieId: 1
 *         userId: 1
 *         title: FullStack JavaScript Developper
 *         descShort: You name it
 *         descLong: 10 years exepriences in Svelte, (we know Svelte is barely 6 years old)
 *         wages: 42000000
 *         place: { city: Lille, street: Massena }
 *         degree: BAC+1
 *         workingTime: flexible
 *         workingLocation: remote
 *         contractType: CDI
 *         contractStart: 6 Mai 2023
 */

  Advertisements.init({
    companieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    descShort: DataTypes.STRING,
    descLong: DataTypes.TEXT,
    wages: DataTypes.BIGINT,
    place: DataTypes.JSON,
    degree: DataTypes.ENUM('BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5'),
    workingTime: DataTypes.ENUM('flexible', '9 to 5'),
    workingLocation: DataTypes.ENUM('remote', 'office', 'hybrid'),
    contractType: DataTypes.ENUM('CDI', 'CDD', 'ALTERNANCE'),
    contractStart: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Advertisements',
  });
  return Advertisements;
};