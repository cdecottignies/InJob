const development = {
  USER: "root",
  PASSWORD: "admin",
  DB: "injob",
  HOST: "",
  PORT: 3306,
  DIALECT: "mysql",
  POOL : {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

const test = {
  USER: "root",
  PASSWORD: "admin",
  DB: "injob",
  HOST: "",
  PORT: 3307,
  DIALECT: "mysql",
  POOL : {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
const production = {
  USER: "root",
  PASSWORD: "admin",
  DB: "injob",
  HOST: "",
  PORT: 3307,
  DIALECT: "mysql",
  POOL : {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

module.exports = {
  development,
  test,
  production
}