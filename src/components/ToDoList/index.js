import React from "react";
import "./styles.css";
import Form from "../Form/form";
import ToDoItemList from "../ToDoItemList/ToDoItemList";

const ToDoList = props => {
  const { createNewToDo, todos, deleteToDo } = props;

  return (
    <main className="todolist-template">
      <div className="title">
        <span className="title-span">To Do</span>
      </div>
      <section className="form-wrapper">
        <Form createNewToDo={createNewToDo} />
      </section>
      <section className="todos-wrapper">
        <ToDoItemList todos={todos} deleteToDo={deleteToDo} />
      </section>
    </main>
  );
};

export default ToDoList;
