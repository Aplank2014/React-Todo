import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



class App extends React.Component {
  // Constructor with state
   // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Clean Dishes',
          id: 1,
          completed: false
        },
        {
          task: 'Vaccum Livingroom',
          id: 2,
          completed: false 
        },
        {
          task: 'Walk Dog',
          id: 3,
          completed: false
        }
      ], 
      todo: ''
    };
  }
  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };

 
  setCompleted = todoId => {
    const todo = this.state.todos.find( todo => todo.id === parseInt(todoId));
    todo.completed = !todo.completed;
    this.setState({ ...this.state.todos, todo });
  }
  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div> 
    );
  }
}

export default App;
