import React, { Component } from "react";
import "./ToDoItemList.css";
import ToDoItem from "../ToDoItem/ToDoItem";

class ToDoItemList extends Component {
  render() {
    return (
      <div className="container">
        <ToDoItem />
      </div>
    );
  }
}

export default ToDoItemList;
