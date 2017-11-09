'use strict';
module.exports = (sequelize, DataTypes) => {
  var Monster = sequelize.define('Monsters', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    minattack: DataTypes.INTEGER,
    maxattack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    image: DataTypes.STRING,
    health: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Monster;
};

