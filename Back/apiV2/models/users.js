'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
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
 *     Users:
 *      type: object
 *      required: 
 *        - companieId
 *        - firstName
 *        - lastName
 *        - email
 *        - password
 *        - phone
 *      properties:
 *        companieId:
 *          type: integer
 *        firstName:
 *          type: string  
 *        lastName:
 *          type: string
 *        email:
 *          type: string
 *          description: Any kind of email is accepted
 *        password:  
 *          type: string
 *          description: should be contain at least 8 character, maj, min and one number
 *        phone: 
 *          type: string
 *          description: No control on it
 *        isAdmin:
 *          type: boolean
 *          default: false
 *        createdAt:
 *          type: Date
 *          default: Today
 *        updatedAt:
 *          type: Date
 *          default: Today
 *      example:
 *        companieId: 2
 *        firstName: Jean
 *        lastName: Luc
 *        email: jeanluc.com
 *        password: zerERT456ty
 *        phone: 234567
 *        isAdmin: false
 */
  
  Users.init({
    companieId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};