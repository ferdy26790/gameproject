'use strict';
module.exports = (sequelize, DataTypes) => {
  var SkillMonster = sequelize.define('SkillMonsters', {
    MonsterId: DataTypes.INTEGER,
    SkillId: DataTypes.INTEGER
  });
  SkillMonster.associate = function(models) {
    // associations can be defined here
    SkillMonster.belongsTo(models.Monsters, {foreignKey: 'MonsterId' });
  }
  SkillMonster.associate = function(models) {
    // associations can be defined here
    SkillMonster.belongsTo(models.Skills, {foreignKey: 'SkillId' });
  }
  return SkillMonster;
};
