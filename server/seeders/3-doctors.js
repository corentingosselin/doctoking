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
    const password = "doctoking";
    let data = [];
    let amount = 50;
    let date = new Date();
    const genders = ['female', 'male'];
    while (amount--) {

      data.push({
        email: faker.internet.email(),
        role: 'doctor',
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        gender: faker.random.arrayElement(genders),
        city: faker.address.city(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        password: await hash(password),
        createdAt: date,
        updatedAt: date
      });
    }

    //create 1 known doctor
    data.push({
      email: 'doctor@gmail.com',
      role: 'doctor',
      first_name: 'Géraldine',
      last_name: 'Troma',
      gender: 'female',
      city: 'Paris',
      phone: '0788901232',
      address: '8 rue des éboustille',
      password: await hash('password'),
      createdAt: date,
      updatedAt: date
    });


    //create 1 know admin
    data.push({
      email: 'admin@gmail.com',
      role: 'admin',
      first_name: 'Sacha',
      last_name: 'Jolien',
      gender: 'male',
      city: 'Paris',
      phone: '0588110232',
      address: '19 boulevard de la pensée',
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
