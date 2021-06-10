'use strict';



const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.User, {
        as: 'patientBooking',
        foreignKey: 'patientId'
      });
      Booking.belongsTo(models.User, {
        as: 'doctorBooking',
        foreignKey: 'doctorId'
      });
      Booking.belongsTo(models.Slot, {
        foreignKey: 'slotId'
      });
    }
  };
  Booking.init({
    start: DataTypes.DATEONLY,
    slotId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};