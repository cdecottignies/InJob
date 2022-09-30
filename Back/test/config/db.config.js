module.exports = {
    HOST: "",
    PORT: 3307,
    USER: "root",
    PASSWORD: "admin",
    DB: "tutorial",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };