// server.js
const express = require("express");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

const startServer = async () => {
  try {
    await sequelize.sync(); // Synchronize models with the database
    app.listen(4000, () => console.log("Server is running on port 4000"));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
