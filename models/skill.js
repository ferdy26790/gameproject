'use strict';
module.exports = (sequelize, DataTypes) => {
  var Skill = sequelize.define('Skills', {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    type: DataTypes.STRING
  });
  Skill.associate = function(models) {
        // associations can be defined here
        
      }
  return Skill;
};
