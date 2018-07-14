import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";

class App extends Component {
  id = 2;
  state = {
    todos: [
      {
        id: 0,
        text: "Let's learn react!!"
      },
      {
        id: 1,
        text: "My name is donggyu shin"
      }
    ]
  };

  _createNewToDo = text => {
    const { todos } = this.state;
    this.setState({
      todos: todos.concat({
        id: this.id++,
        text: text
      })
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App-container">
        <ToDoList todos={todos} createNewToDo={this._createNewToDo} />
      </div>
    );
  }
}

export default App;
