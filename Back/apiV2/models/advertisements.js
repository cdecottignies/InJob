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
      Advertisements.hasMany(models.User, {
        foreignKey: 'userId',
      });
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
    hybrid: DataTypes.ENUM('0', '1 day remote, 4 days office', '2 days remote, 3 days office', '3 days remote, 2 days office', '4 days remote, 1 day office'),
    contractType: DataTypes.ENUM('CDI', 'CDD', 'ALTERNANCE'),
    contractLength: DataTypes.STRING,
    contractStart: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Advertisements',
  });
  return Advertisements;
};