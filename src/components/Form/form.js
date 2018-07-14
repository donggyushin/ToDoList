import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  state = {
    todo: ""
  };

  static defaultProps = {
    createNewToDo: () => {
      console.log("createNewToDo not defined");
    }
  };

  _createNewToDo = () => {
    const { todo } = this.state;
    const { createNewToDo } = this.props;
    createNewToDo(todo);
    this.setState({
      todo: ""
    });
  };

  _handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  _clickEnter = e => {
    if (e.key === "Enter") {
      this._createNewToDo();
    }
  };

  render() {
    const { todo } = this.state;
    return (
      <div className="form">
        <input
          value={todo}
          onChange={this._handleChange}
          className="form-input"
          placeholder="Input ToDo"
          onKeyPress={this._clickEnter}
        />
        <button onClick={this._createNewToDo} className="button">
          ADD
        </button>
      </div>
    );
  }
}

export default Form;
