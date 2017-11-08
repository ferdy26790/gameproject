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
    return queryInterface.bulkInsert('Monsters', [{
      name: 'Dog Spirit',
      health: 1000,
      minattack:10,
      maxattack:13,
      defense:10,
      image:'inuyasha.gif'
    },{
      name: 'Swordman',
      health: 1000,
      minattack:11,
      maxattack:12,
      defense:11,
      image:'swrd.gif'
    },{
      name: 'Rambo',
      health: 900,
      minattack:10,
      maxattack:16,
      defense:9,
      image:'gunslinger.gif'
    },{
      name: 'Reeezaa',
      health: 1000,
      minattack:10,
      maxattack:13,
      defense:10,
      image:'luffy4_48851.gif'
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
