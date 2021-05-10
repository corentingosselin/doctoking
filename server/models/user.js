'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Booking, {
        as: 'patientBooking',
        foreignKey: 'patientId'
      });
      User.hasMany(models.Booking, {
        as: 'doctorBooking',
        foreignKey: 'doctorId'
      });
      

      User.belongsToMany(models.Title, {
        foreignKey: 'doctorId',
        through: models.DoctorTitle,
        as: 'titles',
      });
   

    }
  };
  User.init({
    email: DataTypes.STRING,
    role: DataTypes.ENUM('patient','doctor','admin'),
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};