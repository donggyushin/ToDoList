import React from "react";
import "./styles.css";

const ToDoList = ({ form, children }) => {
  return (
    <main className="todolist-template">
      <div className="title">
        <span className="title-span">To Do</span>
      </div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default ToDoList;
