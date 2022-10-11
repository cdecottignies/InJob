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
db.applicants = require("./applicants.js")(sequelize, Sequelize);


// Associations

// Users belongs to companies && companies has many users(RH)
// On fait en sorte qu'il ne puisse y avoir que l'admin qui puisse créer des advertisements
// db.users.belongsTo(db.companies, {
//   foreignKey: 'companieId'
// }); 
// db.companies.hasMany(db.users, {
//   foreignKey: 'companieId'
// })

// Users has many applicants && applicants belongs to users
db.users.belongsToMany(db.advertisements, {through: 'Applicants', foreignKey: 'userId'})
db.advertisements.belongsToMany(db.users, {through: 'Applicants', foreignKey: 'advertisementId'})

db.applicants.belongsTo(db.users, {foreignKey: 'userId'})
db.applicants.belongsTo(db.advertisements, {foreignKey: 'advertisementId'})

// Companies has many advertisements && advertisements belongs to one companie
db.companies.hasMany(db.advertisements, {
  foreignKey: 'companieId'
});
db.advertisements.belongsTo(db.companies, {
  foreignKey: 'companieId'
});

module.exports = db;
