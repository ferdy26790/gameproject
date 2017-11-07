'use strict';
module.exports = (sequelize, DataTypes) => {
  var SkillMonster = sequelize.define('SkillMonster', {
    MonsterId: DataTypes.INTEGER,
    SkillId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SkillMonster;
};