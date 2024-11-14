// /models/Goal.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Goal = sequelize.define("Goal", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.TEXT,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Goal.belongsTo(User); // Establish relation with User

module.exports = Goal;
