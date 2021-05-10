'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorTitle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  
    }
  };
  DoctorTitle.init({
    doctorId: DataTypes.INTEGER,
    titleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DoctorTitle',
  });
  return DoctorTitle;
};