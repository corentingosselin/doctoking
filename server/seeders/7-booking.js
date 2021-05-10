'use strict';

const faker = require('faker');

const {
  Slot,
  Availability,
  User
} = require('../models')

//dimanche 0, lundi 1, ect, samedi 6
// first index = dimanche = 6
// donc >= 5 ou > 4 la date est invalide car elle dépasse vendredi
const days = ['6', '0', '1', '2', '3', '4', '5'];

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const [patients, doctors] = await Promise.all([

      User.findAll({
        where: {
          role: 'patient'
        }
      }),
      User.findAll({
        where: {
          role: 'doctor'
        }
      })
    ])
    let data = [];
    let date = new Date();

    for (var i = 0; i < patients.length; i++) {

      //must take a slot by the date, if it's monday, it returns 0
      //and we select a random slot with day 0

      const patientID = patients[i].id;
      const doctorID = doctors[Math.floor(Math.random() * doctors.length)].id;
      const futureDateTime = faker.date.future();
      const futureDateString = JSON.stringify(futureDateTime).split('T')[0].substring(1);

      const dayId = futureDateTime.getDay();
      const dayIndex = days[dayId];

      if (dayIndex > 4) continue;

      const slots = await Slot.findAll({
        attributes: ['id'],
        include: [
          {
            attributes: ['day'],
            model: Availability,
            as: 'Availability',
            where: {
              doctorId: doctorID,
              day: dayIndex
            }
          }
        ]
      });
      const values = Object.values(slots);
      const randomValue = values[parseInt(Math.random() * values.length)];
      //const slot = slots[Math.floor(Math.random() * slots.length)].id;
      const desc = faker.lorem.words(5);
      data.push({
        start: futureDateString,
        slotId: randomValue.id,
        patientId: patientID,
        doctorId: doctorID,
        description: desc,
        createdAt: date,
        updatedAt: date
      });

    }

    await queryInterface.bulkInsert('Bookings', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bookings', null, {});

  }
};
