import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
// import MenuComponent from './menuComponent'
const TaskComponent = (props) => {
  return (
    <div style={props.styling}>
      {props.isCompleted ? (
        <div
          style={{
            display: "flex",
            padding: "20px",
            width: "60px",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TiTick
            style={{
              ...styles.iconStyle,
              backgroundColor: "grey",
              borderRadius: "50%",
              color: "white",
            }}
            onClick={props.onComplete}
            size={10}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            padding: "20px",
            width: "60px",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={styles.notCompletedIconStyle}
            onClick={props.onComplete}
          ></div>
        </div>
      )}

      <div style={styles.taskStyle}>{props.taskStr}</div>

      <div class="dropdown">
        <FiMoreVertical
          style={{ ...styles.iconStyle, padding: "16px", boxShadow: "none" }}
        />
        <div class="dropdown-content">
          {/* <h6 style={{ fontSize: "20px" }}> Delete</h6> */}
          <AiFillDelete
            onClick={props.onDelete}
            style={{
              ...styles.iconStyle,
              color: "red",

              boxShadow: "none",
            }}
            size={10}
          />
        </div>
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
    fontSize: "20px",
    padding: "20px",
    color: "black",
  },
  iconStyle: {
    display: "flex",
    width: "50%",
    height: "50%",
    // fontSize: "20px",
    color: "black",
    cursor: "pointer",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
  },
  notCompletedIconStyle: {
    display: "flex",
    width: "50%",
    height: "50%",
    color: "black",
    cursor: "pointer",
    borderWidth: "1px",
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: "50%",
  },
};

export default TaskComponent;
