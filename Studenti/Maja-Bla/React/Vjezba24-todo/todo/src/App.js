import React from 'react';
import './App.css';
import { VisibilityToolbar, AddTodoForm, TodoList } from './components';
import { VISIBILITY_TYPES } from './constants/const';

class App extends React.Component {

  state = {
    todos: [ ],
    visibility: VISIBILITY_TYPES.ALL
  }

  handleVisibilityChange(visibility){
    this.setState({ visibility: visibility})
  }


handleAddTodo(value){
  const { todos }= this.state;

  const newTodo = { 
    id: Math.random().toString(36).substr(2,9),
    text: value,
    completed: false
  };

  this.setState({ todos: [...todos, newTodo ] });
}


handleRemoveTodo(id) {
  const { todos } = this.state;
  const newTodos = todos.filter(todo => todo.id !== id);
  this.setState({ todos: newTodos});
}


handleToggleTodo(id){

  const { todos } = this.state;
  const todo = todos.find(todo => todo.id=== id);
  todo.completed = !todo.completed;
  this.setState({ todos });

}


  render (){

    const { visibility, todos } = this.state;

    return (
      <div className='app'>
        <h1 className='header'>My tasks</h1>
        <VisibilityToolbar 
        visibilityType={visibility} onVisibilityChange={this.handleVisibilityChange.bind(this)}
        />
        <div className='todo-container'>
        <AddTodoForm addTodo = {this.handleAddTodo.bind(this)}/>
        <TodoList 
        todos={todos} 
        toggleTodo={this.handleToggleTodo.bind(this)} 
        removeTodo={this.handleRemoveTodo.bind(this)} 
        />
        </div>

      </div>
    );
  }
  
  }
    
 
export default App;
