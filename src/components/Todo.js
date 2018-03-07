import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.todo.text,
      completed: false,
      strikethrough: { textDecoration: "none" }
    };
  }
  toggleDoneness = () => {
    this.setState({ completed: !this.state.completed });
    this.updateStyling();
  };
  updateStyling = () => {
    if (this.state.completed) {
      this.setState({ strikethrough: { textDecoration: "line-through" } });
    } else {
      this.setState({ strikethrough: { textDecoration: "none" } });
    }
  };

  render() {
    return (
      <div className="todo-wrapper">
        {this.props.button}
        <p style={this.state.strikethrough} onClick={this.toggleDoneness}>
          {this.props.todo.text}
        </p>
      </div>
    );
  }
}

export default Todo;
