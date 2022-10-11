'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Ca ne fonctionne pas des masses
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

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
