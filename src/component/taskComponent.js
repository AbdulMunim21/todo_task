import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
const TaskComponent = (props) => {
  return (
    <div style={props.styling}>
      {props.isCompleted ? (
        <div
          style={{
            display: "flex",
            padding: "20px",
            width: "10%",
            height: "100%",
          }}
        >
          <TiTick
            style={{
              ...styles.iconStyle,
              backgroundColor: "grey",
              borderRadius: "40%",
              color: "white",
            }}
            onClick={props.onComplete}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            padding: "20px",
            width: "10%",
            height: "100%",
          }}
        >
          <div
            style={styles.notCompletedIconStyle}
            onClick={props.onComplete}
          ></div>
        </div>
      )}

      <div style={styles.taskStyle}>{props.taskStr}</div>
      <div
        style={{
          display: "flex",
          padding: "20px",
          width: "10%",
          height: "100%",
        }}
      >
        <FiMoreVertical style={styles.iconStyle} onClick={props.onDelete} />
      </div>
    </div>
  );
};

const styles = {
  taskStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "10px",
    width: "80%",
    height: "100%",
    fontSize: "40px",
    padding: "20px",
    color: "black",
  },
  iconStyle: {
    display: "flex",
    width: "100%",
    height: "100%",
    fontSize: "20px",
    color: "black",
    cursor: "pointer",
  },
  notCompletedIconStyle: {
    display: "flex",
    width: "10%",
    height: "100%",
    color: "black",
    cursor: "pointer",
    borderWidth: "3px",
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: "40%",
  },
};

export default TaskComponent;
