import React from 'react';
import TodoList from './TodoList/todoList'
import TodoItem from './TodoItem/todoItem'
import AddTodo from './AddTodo/addTodo'
import './App.css';

class App extends React.Component {

  // Whenever state gets updated, rerender below with the updated state.
  // It allows us to use JS inside HTML.
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  render() {
    return (
      <div>
        <TodoList />
        <TodoItem />
        <AddTodo addTodoFunc={this.addTodo} ></AddTodo>
      </div>
    );
  }

  // Can only use string in localStorage, we will always get a string back. 
  // I want to put an object inside, so I have to use JSON.stringify, and JSON.parse in order to get it back as an object.
  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      const savedTodos = JSON.parse(todos);
      // setState is async
      this.setState({ todos: savedTodos })
    } else {
      console.log('LOG: Do not have todos');

    }
  }

    addTodo = async (todo) => {
      await this.setState({todos: [...this.state.todos, todo]});
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
      console.log(localStorage.getItem('todos'));
      
    }
    

}

export default App;
