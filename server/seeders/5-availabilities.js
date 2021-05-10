'use strict';
const {
  User,
} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const [doctors]= await Promise.all([
      User.findAll({
        where: {
          role: 'doctor'
        }
      })
    ]);
    //availabilities
    let avs = [];
    //curent date
    const date = new Date();

    //doctors
    for (let i = 0; i < doctors.length; i++) {
      const doctorId = doctors[i].id;
      //monday, thuesday,wednesday,thursday,ect
      for (let d = 0; d < 5; d++) {
        // AM,PM
        for (let a = 0; a < 2; a++) {
          const start = a === 0 ? '08:00:00'  : '13:30:00';
          const end = a === 0 ? '12:00:00'  : '16:00:00';
          avs.push({
            day: d,
            doctorId: doctorId,
            time_start: start,
            time_end: end,
            createdAt: date,
            updatedAt: date
          });
        }

      }
    }
    await queryInterface.bulkInsert('Availabilities', avs, {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Availabilities', null, {});
  }
};
