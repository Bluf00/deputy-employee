require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres', // change to 'mysql' if using MySQL
    port: process.env.DB_PORT || 5432
  }
);

module.exports = sequelize;
