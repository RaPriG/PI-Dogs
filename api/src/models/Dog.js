const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
