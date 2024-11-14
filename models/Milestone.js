// /models/Milestone.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Goal = require("./Goal");

const Milestone = sequelize.define("Milestone", {
  due: {
    type: DataTypes.DATE,
  },
  details: {
    type: DataTypes.TEXT,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Milestone.belongsTo(Goal); // Establish relation with Goal

module.exports = Milestone;
