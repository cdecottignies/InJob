'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Companies extends Model {
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
   *  schemas:
   *   Companies:
   *    type: object
   *    required: 
   *      - name
   *      - siret
   *      - numEmploye
   *      - desc
   *      - link
   *      - logo
   *    properties:
   *     name:
   *       type: string
   *     siret:
   *       type: string  
   *       description: Must be of 14 characters
   *     numEmploye:
   *      type: integer
   *     desc:
   *      type: string
   *      description: A quick text that describe the companie
   *     link:  
   *      type: string
   *      description: A link that point to the companie site
   *     logo: 
   *      type: string
   *      description: A link to the companie logo
   *     createdAt:
   *      type: Date
   *      default: Today
   *     updatedAt:
   *      type: Date
   *      default: Today
   *    example:
   *      name: Microsoft
   *      siret: aaaaaaaaaaaaa
   *      lastName: Luc
   *      numEploye: 42000
   *      desc: Developers Developers Developers 
   *      link: https://microsoft.com
   *      logo: https://microsoft.com/logo
   */

  Companies.init({
    name: DataTypes.STRING,
    siret: DataTypes.STRING,
    numEmploye: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    link: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};