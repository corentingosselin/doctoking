'use strict';
const {
  User,
  Title
} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {


      const [ titles, doctors] = await Promise.all([
        Title.findAll(),
        User.findAll({
          where: {
            role: 'doctor'
          }
        })
    ])
  
    let data = [];
    let date = new Date();
    for (var i = 0; i < doctors.length; i++) {
      const doctorID = doctors[i].id;
      const titleID = titles[Math.floor(Math.random() * titles.length)].id;
      data.push({
        doctorId: doctorID,
        titleId: titleID,
        createdAt: date,
        updatedAt: date
      });

    }

    await queryInterface.bulkInsert('DoctorTitles', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DoctorTitles', null, {});
  }
};
