'use strict';
module.exports = (sequelize, DataTypes) => {
  var Collection = sequelize.define('Collection', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Collection;
};