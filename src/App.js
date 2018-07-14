import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <ToDoList children={"template 완성"} />
      </div>
    );
  }
}

export default App;
