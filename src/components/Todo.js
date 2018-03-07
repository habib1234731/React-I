import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.todo.text,
      completed: this.props.completed,
      strikethrough: { textDecoration: "none" }
    };
  }
  toggleDoneness = () => {
    this.setState({ completed: !this.state.completed });
  };

  render() {
    let styles = { textDecoration: "none" };
    if (this.state.completed) {
      styles = { textDecoration: "strikethrough" };
    }
    return (
      <div className="todo-wrapper">
        {this.props.button}
        <p style={styles} onClick={this.toggleDoneness}>
          {this.props.todo.text}
        </p>
      </div>
    );
  }
}

export default Todo;
