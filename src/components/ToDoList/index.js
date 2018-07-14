import React from "react";
import "./styles.css";
import Form from "../Form/form";

const ToDoList = ({ children }) => {
  return (
    <main className="todolist-template">
      <div className="title">
        <span className="title-span">To Do</span>
      </div>
      <section className="form-wrapper">
        <Form />
      </section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default ToDoList;
