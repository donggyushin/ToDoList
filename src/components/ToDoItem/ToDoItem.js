import React, { Component } from "react";
import "./ToDoItem.css";

class ToDoItem extends Component {
  state = {
    checked: false
  };

  static defaultProps = {
    text: "text",
    deleteToDo: () => {
      console.log("deleteToDo not defined");
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  _clickX = e => {
    const { id, deleteToDo } = this.props;

    e.stopPropagation();
    deleteToDo(id);
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
      <div>
        <hr />
        <div className="todoitem__container" onClick={this._handleOnToggle}>
          <div onClick={this._clickX} className="todoitem__remove">
            &times;
          </div>
          <div className={`todoitem__todo-text ${checked && "checked"}`}>
            {text}
          </div>
          <div className="todoitem__check-mark">{checked && "✓"}</div>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
