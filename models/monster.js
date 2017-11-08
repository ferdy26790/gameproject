'use strict';
module.exports = (sequelize, DataTypes) => {
  var Monster = sequelize.define('Monsters', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    health: DataTypes.INTEGER
  });
  Monster.associate = function(models) {
    // associations can be defined here
    Monster.hasMany(Model.User, { foreignKey: 'MonsterId' });
  }
  return Monster;
};
