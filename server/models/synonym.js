'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Synonym extends Model {
    static associate(models) {
      // define association here
    }
  };
  Synonym.init({
    titleId: DataTypes.INTEGER,
    synonym: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Synonym',
  });
  return Synonym;
};