import axios from "axios";

export const getTasks = async (setTaskList) => {
  const response = await axios.get("http://localhost:5000/getTasks", {
    withCredentials: true,
  });

  return response;
};

export const addTask = async (taskInput) => {
  const time = new Date();
  const response = await axios.post(
    "http://localhost:5000/addTask",
    {
      task: taskInput,
      creationTime: time,
      completedTime: time,
    },
    { withCredentials: true }
  );
  return {response:response, time:time}
};

export const deleteTask = async(deletedTask)=>{
  await axios.post(
    "http://localhost:5000/deleteTask",
    { id: deletedTask._id },
    { withCredentials: true }
  );
}

export const markTaskComplete = async (markedTask)=>{
  await axios.post(
    "http://localhost:5000/markTaskComplete",
    { id: markedTask._id },
    { withCredentials: true }
  );
}
