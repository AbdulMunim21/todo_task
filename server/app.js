const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const taskRoutes = require("./routes/tasksRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/", taskRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/todo_task")
  .then((result) => app.listen(5000));
