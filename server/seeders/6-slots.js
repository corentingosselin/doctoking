'use strict';

const {
  Availability,
} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const avs = await Availability.findAll();

    //availabilities
    let slots = [];
    //curent date
    const date = new Date();
    //doctors
    for (let i = 0; i < avs.length; i++) {
      const availabilityId = avs[i].id;
      const start = avs[i].time_start;
      const end = avs[i].time_end;
      //create date format          
      const timeStart = new Date("01/01/2007 " + start);
      const timeEnd = new Date("01/01/2007 " + end);

      let diff =(timeEnd.getTime() - timeStart.getTime()) / 1000;
      diff /= 60;
      diff = Math.abs(Math.round(diff));
      const slotAmount = diff / 30;
      for (let s = 0; s < slotAmount; s++) {
    
          slots.push({
            availabilityId: availabilityId,
            slot: s,
            createdAt: date,
            updatedAt: date
          });
      }
    }
    await queryInterface.bulkInsert('Slots', slots, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Slots', null, {});
  }
};
