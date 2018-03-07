import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    const styles = this.props.todo.completed
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };

    return (
      <div className="todo-wrapper">
        {this.props.button}
        <p style={styles} onClick={() => this.props.onClick()}>
          {this.props.todo.text}
        </p>
      </div>
    );
  }
}

export default Todo;
