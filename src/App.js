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

  _deleteToDo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
      //전해받은 id와 비교하려는 id가 일치하면 false값을 반환하므로 해당 아이디의 객체만 사라지게됩니다.
    });
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
        <ToDoList
          todos={todos}
          createNewToDo={this._createNewToDo}
          deleteToDo={this._deleteToDo}
        />
      </div>
    );
  }
}

export default App;
