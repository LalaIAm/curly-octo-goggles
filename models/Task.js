// /models/Task.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Milestone = require("./Milestone");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.TEXT,
  },
  due: {
    type: DataTypes.DATE,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Task.belongsTo(Milestone); // Establish relation with Milestone

module.exports = Task;
