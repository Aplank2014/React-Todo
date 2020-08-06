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
    };
  }

  addItem = newTodo => {
    console.log(newTodo);
    this.setState({ todos: [...this.state.todos, newTodo]});
  }
 
  setCompleted = todoId => {
    const todo = this.state.todos.find( todo => todo.id === parseInt(todoId));
    todo.completed = !todo.completed;
    this.setState({ ...this.state.todos, todo });
  }
  
  clearCompleted = () => {
    this.setState({ todos: this.state.todos.filter( todo =>
      !todo.completed
    )})
  }

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}
        setCompleted={this.setCompleted} />
        <TodoForm addItem={this.addItem}
        clearCompleted={this.clearCompleted}
    /> 
    </div>
    );
  }
}

export default App;
