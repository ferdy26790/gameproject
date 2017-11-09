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
    return queryInterface.bulkInsert('Skills', [{
      name: 'Ram',
      attack: 2,
      type:'attack',
      image:'slash.jpeg'
    },{
      name: 'Sharpnel',
      attack: 3,
      type:'attack',
      image:'sharpnel.jpeg'
    },{
      name: 'Ultimate',
      attack: 4,
      type:'attack',
      image:'crit.jpeg'
    }], {});
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
