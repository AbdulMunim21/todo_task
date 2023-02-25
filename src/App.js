import React, { useEffect, useState } from "react";
import bgPic from "./images/background_img.png";
import humanPic from "./images/human.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import * as apiServices from "./api/apiFile";

import "./App.css";

import TaskComponent from "./component/taskComponent";

function App() {
  const [tasksList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState();
  const [hideTasks, setHideTasks] = useState(true);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const response = await apiServices.getTasks();
    if (response.data.message) {
      setTaskList(response.data.tasks);
    }
  };

  const addTask = async () => {
    const { response, time } = await apiServices.addTask(taskInput);
    if (response.data.message) {
      setTaskList([
        ...tasksList,
        {
          _id: response.data.id,
          task: taskInput,
          creationTime: time,
          completed: false,
          completedTime: time,
        },
      ]);
    }
    setTaskInput("");
  };

  const deleteTask = async (deletedTask) => {
    apiServices.deleteTask(deletedTask);
    setTaskList((taskList) =>
      taskList.filter((task) => task._id !== deletedTask._id)
    );
  };

  const markTaskComplete = async (markedTask) => {
    apiServices.markTaskComplete(markedTask);
    setTaskList((taskList) =>
      taskList.map((task) => {
        if (task._id === markedTask._id) {
          task.completed = true;
          return task;
        }
        return task;
      })
    );
  };

  return (
    <div
      style={{
        ...styles.root,
        backgroundImage: `url(${bgPic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={styles.picDiv}>
        <img style={styles.picStyle} src={humanPic} alt="humanImage" />
      </div>
      <div style={styles.taskInputDiv}>
        <div style={styles.inputDivContainer}>
          <GiHamburgerMenu
            style={styles.iconStyle}
            onClick={() => {
              setHideTasks(!hideTasks);
            }}
          />
          <input
            style={styles.inputStyle}
            placeholder="To do today"
            type={"text"}
            onChange={(e) => {
              setTaskInput(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addTask();
              }
            }}
            value={taskInput}
          />
          <MdKeyboardArrowDown style={styles.iconStyle} onClick={addTask} />
        </div>
      </div>
      <div style={styles.taskListDiv}>
        {hideTasks
          ? tasksList.map((task, i) => {
              if (i === 0) {
                return (
                  <TaskComponent
                    styling={{
                      ...styles.taskDivStyle,
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                    taskStr={task.task}
                    isCompleted={task.completed}
                    onComplete={() => markTaskComplete(task)}
                    onDelete={() => deleteTask(task)}
                  />
                );
              }
              return (
                <TaskComponent
                  styling={{
                    ...styles.taskDivStyle,
                  }}
                  iconStyle={styles.iconStyle}
                  isCompleted={task.completed}
                  taskStr={task.task}
                  onDelete={() => deleteTask(task)}
                  onComplete={() => markTaskComplete(task)}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

const styles = {
  root: {
    width: "100vw",
    height: "100vh",
    margin: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  picDiv: {
    display: "flex",
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  picStyle: {
    display: "flex",
    width: "100px",
    height: "100px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "grey",
  },
  taskInputDiv: {
    display: "flex",
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputDivContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
    height: "50px",
    backgroundColor: "grey",
    opacity: 0.4,
    padding: "10px",
    boxShadow: "0px 5px 15px black",
  },
  inputStyle: {
    display: "flex",
    width: "75%",
    height: "100%",
    marginLeft: "4%",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontSize: "23px",
    color: "white",
  },
  taskListDiv: {
    display: "flex",
    width: "100%",
    height: "55%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "20px",
    overflowY: "auto",
    scrollY: "auto",
  },
  taskDivStyle: {
    display: "flex",
    width: "30%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderBottom: "3px solid rgb(212, 212, 212)",
    padding: "10px",
  },
  iconStyle: {
    display: "flex",
    width: "10%",
    height: "100%",
    color: "black",
    cursor: "pointer",
  },
};

export default App;
