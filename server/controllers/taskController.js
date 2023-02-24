const Task = require("../models/taskModel");

exports.addTask = async (req, res, next) => {
  try {
    const task = req.body;
    const taskModel = new Task({
      task: task.task,
      completed: false,
      completedTime: task.completedTime,
      creationTime: task.creationTime,
    });

    const data = await taskModel.save();
    res.json({
      message: true,
      id:data._id
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: false,
    });
  }
};

exports.getTasks = async (req, res, next) => {
  try {
    const allTasks = await Task.find({});
    // console.log(allTasks);
    res.json({
      tasks: allTasks,
      message: true,
    });
  } catch (e) {
    res.json({
      message: false,
    });
  }
};
exports.deleteTask = async (req, res, next) => {
  try {
    const id = req.body.id;
    await Task.deleteOne({ _id: id });
    res.json({
      message: true,
    });
  } catch (error) {
    res.json({
      message: false,
    });
  }
};

exports.markTaskComplete = async (req, res, next) => {
  const id = req.body.id;
  const task = await Task.findById(id);
  if (!task.completed) {
    await Task.findByIdAndUpdate(id, {
      $set: {
        completed: true,
        completedTime: new Date(),
      },
    });
    res.json({
      message: true,
    });
  } else {
    res.json({
      message: false,
    });
  }
};
