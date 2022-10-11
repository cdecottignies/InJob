'use strict';
const dbConfig = require("../config/db.config");
const dbConfigDev = dbConfig.development;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfigDev.DB, dbConfigDev.USER, dbConfigDev.PASSWORD, {
    host: dbConfigDev.HOST,
    dialect: dbConfigDev.DIALECT,
  
    pool: {
      max: dbConfigDev.POOL.max,
      min: dbConfigDev.POOL.min,
      acquire: dbConfigDev.POOL.acquire,
      idle: dbConfigDev.POOL.idle
    }
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Ca fonctionnel
db.advertisements = require("./advertisements.js")(sequelize, Sequelize);
db.users = require("./users.js")(sequelize, Sequelize);
db.companies = require("./companies.js")(sequelize, Sequelize);

module.exports = db;
