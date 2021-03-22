'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor_titles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  doctor_titles.init({
    doctorId: DataTypes.INTEGER,
    titleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'doctor_titles',
  });
  return doctor_titles;
};