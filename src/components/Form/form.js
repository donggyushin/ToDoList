import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  state = {
    todo: ""
  };

  _handleChange = e => {
    const { todo } = this.state;
    this.setState({
      todo: e.target.value
    });
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
        />
        <button className="button">ADD</button>
      </div>
    );
  }
}

export default Form;
