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
  Advertisements.init({
    title: DataTypes.STRING,
    descShort: DataTypes.STRING,
    descLong: DataTypes.TEXT,
    wages: DataTypes.BIGINT,
    place: DataTypes.JSON,
    degree: DataTypes.ENUM('BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5'),
    workingTime: DataTypes.ENUM('flexible', '9 to 5'),
    workingLocation: DataTypes.ENUM('remote', 'office', 'hybrid'),
    contractType: DataTypes.ENUM('CDI', 'CDD', 'ALTERNANCE'),
    contractStart: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Advertisements',
  });
  return Advertisements;
};