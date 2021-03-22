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
    let amount = 50;
    let date = new Date();
    while (amount--) {

      data.push({
        email: faker.internet.email(),
        role: 'patient',
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        gender: faker.name.gender(),
        city: faker.address.city(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        password: await hash(faker.internet.password()),
        createdAt: date,
        updatedAt: date
      });
    }
    await queryInterface.bulkInsert('users', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
