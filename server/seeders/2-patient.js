'use strict';
const bcrypt = require('bcryptjs');
const faker = require('faker');

async function hash(password) {
  const salt = await bcrypt.genSalt(10);
  const passwprdHash = await bcrypt.hash(password, salt);  
  return passwprdHash;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
    let data = [];
    let amount = 100;
    let date = new Date();
    const genders = [ 'female' , 'male' ];

    while (amount--) {

      data.push({
        email: faker.internet.email(),
        role: 'patient',
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        gender: faker.random.arrayElement(genders),
        city: faker.address.city(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        password: await hash('password'),
        createdAt: date,
        updatedAt: date
      });
    }

    //create 1 know patient
    data.push({
      email: 'patient@gmail.com',
      role: 'patient',
      first_name: 'Georges',
      last_name: 'Girondor',
      gender: 'male',
      city: 'Paris',
      phone: '0610998767',
      address: '6 avenue des Champs Elysee',
      password: await hash('password'),
      createdAt: date,
      updatedAt: date
    });

    await queryInterface.bulkInsert('Users', data, {});
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
