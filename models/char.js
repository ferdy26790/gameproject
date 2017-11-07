'use strict';
module.exports = (sequelize, DataTypes) => {
  var Char = sequelize.define('Char', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    health: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Char;
};