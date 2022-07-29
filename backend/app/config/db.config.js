module.exports = {
  HOST: "localhost",
  USER: "ammar",
  PASSWORD: "postgres",
  DB: "softsol_erp",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};