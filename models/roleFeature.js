const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RoleFeature = sequelize.define('RoleFeature', {
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  featureId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = RoleFeature;
