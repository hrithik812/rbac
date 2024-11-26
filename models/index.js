const sequelize = require('../config/db');
const Role = require('./role');
const User = require('./user');
const Feature = require('./feature');
const RoleFeature = require('./roleFeature');

// Define associations
Role.hasMany(User, { foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId' });

Role.belongsToMany(Feature, { through: RoleFeature, foreignKey: 'roleId' });
Feature.belongsToMany(Role, { through: RoleFeature, foreignKey: 'featureId' });

module.exports = { sequelize, Role, User, Feature, RoleFeature };
