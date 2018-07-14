import React, { Component } from "react";
import "./ToDoItem.css";

class ToDoItem extends Component {
  state = {
    checked: false
  };

  static defaultProps = {
    text: "text"
  };

  _handleOnToggle = () => {
    const { checked } = this.state;
    this.setState({
      checked: !checked
    });
  };

  render() {
    const { checked } = this.state;
    const { text } = this.props;
    return (
      <div className="todoitem__container" onClick={this._handleOnToggle}>
        <div className="todoitem__remove">&times;</div>
        <div className={`todoitem__todo-text ${checked && "checked"}`}>
          {text}
        </div>
        <div className="todoitem__check-mark">{checked && "✓"}</div>
      </div>
    );
  }
}

export default ToDoItem;
