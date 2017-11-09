'use strict';
module.exports = (sequelize, DataTypes) => {
  var SkillMonster = sequelize.define('SkillMonsters', {
    MonsterId: DataTypes.INTEGER,
    SkillId: DataTypes.INTEGER
  });
    
  return SkillMonster;
};
