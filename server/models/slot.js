'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Slot.belongsTo(models.Availability,
        {
          as: 'Availability',
          foreignKey: 'availabilityId'
        }
      );
     Slot.hasMany(models.Booking,
      {
        as: 'Booking',
        foreignKey: 'slotId'
      }
     )};
  };
  Slot.init({
    availabilityId: DataTypes.INTEGER,
    slot: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Slot',
  });
  return Slot;
};