import React, { Component } from 'react';

class TodoDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>This is my to do list:</h2>
        {this.props.todo.map(todos => {
          return (
            <div>
              <h4>{todos.text}</h4>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TodoDisplay;