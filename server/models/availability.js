'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Availability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Availability.hasMany(models.Slot, {
        as: 'Slots', 
        foreignKey:'availabilityId'
      })
    }
  };
  Availability.init({
    day: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    time_start: DataTypes.TIME,
    time_end: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Availability',
  });
  return Availability;
};