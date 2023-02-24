const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  task: {
    required: true,
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedTime: Date,
  creationTime: Date,
});

module.exports = mongoose.model("Task", taskSchema);