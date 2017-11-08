'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      name: 'Ferdy',
      credit: 1000,
      email: 'ferdy123@gmail.com',
      win:0,
      lose:0,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name: 'Reza',
      credit: 1000,
      email: 'reza123@gmail.com',
      win:0,
      lose:0,
      createdAt:new Date(),
      updatedAt:new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
