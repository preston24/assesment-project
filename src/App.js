import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import TodoDisplay from './components/todoDisplay'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      addTodo: {
        text: ''
      }
    }
  }

  handleInputChange = (e) => {
    let newTodo = this.state.addTodo;
    newTodo[e.target.name] = e.target.value
    this.setState({
      addTodo: newTodo
    })
    console.log(this.state.addTodo)
  }

  submitTodoRequest = () => {
    axios.get('http://localhost:3001/todo').then((response) => {
      this.setState({
        todo: response.data
      }, () => {
        console.log(this.state)
      })
    })
  }

  add = () => {
    axios.post('http://localhost:3001/todo', this.state.addTodo).then( (response) => {
      this.setState({
        todo: response.data
      }, () => {
        console.log(this.state)
      })
    })
  }

  deleteTodo = () => {
    axios.delete('http://localhost:3001/todo').then( (response) => {
      this.setState({
        todo: response.data.splice()
      }, () => {
        console.log(this.state)
      })
    })
  }

  editTodo = () => {
    axios.put('http://localhost:3001/todo').then( (response) => {
      this.setState({
        todo: response.data
      }, () => {
        console.log(this.state)
      })
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List!!!!!</h1>
        </header>
        <p className="App-intro">
          
        </p>
        <button onClick={this.submitTodoRequest}>To Do</button>
        <TodoDisplay todo={this.state.todo}></TodoDisplay>
        <input name='text' onChange={this.handleInputChange} />
        <button onClick={this.add}>Add to do</button>
        <button onClick={this.editTodo}>Edit to do</button>
        <button onClick={this.deleteTodo}>Delete to do</button>
      </div>
    );
  }
}

export default App;
