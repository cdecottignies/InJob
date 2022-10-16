'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applicants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(modelName) {
      // define association here
    }
  }

  /**
 * @swagger
 * components:
 *   schemas:
 *     Applicants:
 *       type: object
 *       required:
 *         - advertisementId
 *         - userId
 *       properties:
 *         advertisementId:
 *           type: integer
 *           description: Link a user to the advertisement which he applied to
 *         userId:
 *           type: integer
 *           description: Link an advertisement to the one who applied
 *       example:
 *         advertisementId: 1
 *         userId: 1
 */

  Applicants.init({
    // id: DataTypes.INTEGER,
    advertisementId: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Applicants',
  });
  return Applicants;
};