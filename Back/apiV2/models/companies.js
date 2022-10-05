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
      Companies.hasMany(models.Advertisements, {
        foreignKey: 'advertisementId',
        onDelete: 'CASCADE'
      })
    }
  }
  Companies.init({
    name: DataTypes.STRING,
    SIRET: DataTypes.STRING,
    numEmploye: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    link: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};