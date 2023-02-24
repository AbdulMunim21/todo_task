const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const taskRoutes = require("./routes/tasksRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", taskRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017")
  .then((result) => app.listen(3000));
