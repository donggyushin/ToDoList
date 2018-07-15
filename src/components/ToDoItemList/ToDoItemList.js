import React, { Component } from "react";
import "./ToDoItemList.css";
import ToDoItem from "../ToDoItem/ToDoItem";

class ToDoItemList extends Component {
  render() {
    const { todos, deleteToDo } = this.props;
    const todoItems = todos.map(todo => {
      return (
        <ToDoItem
          key={todo.id}
          deleteToDo={deleteToDo}
          id={todo.id}
          text={todo.text}
        />
      );
    });
    return <div className="container">{todoItems}</div>;
  }
}

export default ToDoItemList;
