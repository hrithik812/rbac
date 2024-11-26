const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('ss_db', 'postgres', 'saml@123', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

module.exports = sequelize;
