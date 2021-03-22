'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class specialities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  specialities.init({
    titleId: DataTypes.INTEGER,
    synonym: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'specialities',
  });
  return specialities;
};