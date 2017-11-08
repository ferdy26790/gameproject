'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    credit: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    win: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    MonsterId: DataTypes.INTEGER
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Monster, {foreignKey: 'MonsterId' });
  }
  return User;
};
