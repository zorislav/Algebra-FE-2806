import React from "react";
//ovo importiramo radi klasne komponente
import "./App.css";

import { VisibilityToolbar, AddTodoForm, TodoList } from "./components";
import { VISIBILITY_TYPES } from "./constants/const";

class App extends React.Component {
  state = {
    todos: JSON.parse (localStorage.getItem('todos')) || [] ,
    visibility: VISIBILITY_TYPES.ALL,
  };
  //ovo je početno stanje


  componentDidUpdate(){
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }


  handleVisibilityChange(visibility) {
    console.log(visibility);
    this.setState({ visibility: visibility });
  }

  handleAddTodo(value) {
    const { todos } = this.state;

    const newTodo = {
      id: Math.random().toString(36).substring(2, 9),
      text: value,
      completed: false,
    };

    this.setState({ todos: [...todos, newTodo] });
  }

  handleRemoveTodo(id) {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
    //novo stanje radimo
  }

  handleToggleTodo(id) {
    const { todos } = this.state;
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    this.setState({ todos });
  }

  //ovo riješava onaj clear completed botun
  handleRemoveCompleted() {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.completed);
    this.setState({ todos: newTodos });
  }

  getVisibleTodos() {
    const { todos, visibility } = this.state;
    if (visibility === VISIBILITY_TYPES.ALL) {
      return todos;
    }

    if (visibility === VISIBILITY_TYPES.COMPLETED) {
      return todos.filter((todo) => todo.completed);
      //samo provjeravamo jel true, ako je ide u novi niz
    }

    return todos.filter((todo) => !todo.completed);
    //Ovo ne triba provjera da bude negativan pa ide ovako
  }

  render() {
    const { visibility, todos } = this.state;
    //izvadili smo visibility iz state objekta
    const visibleTodos = this.getVisibleTodos();
    const showClearCompleted =
      visibility === VISIBILITY_TYPES.ALL || visibility === VISIBILITY_TYPES.COMPLETED;
    const hasCompleted = todos.filter((todo) => !!todo.completed).length > 0;

    return (
      <div className="app">
        <h1 className="header">My tasks</h1>
        <VisibilityToolbar
          visibilityType={visibility}
          onVisibilityChange={this.handleVisibilityChange.bind(this)}
        />
        {/* OVO POSTAVLJAMO OVAJ ATRIBUT OVDI DA GA POSLI MOŽEMO DOHVATITI kao
        PARAMETAR U NAŠOJ KOMPONENTI!!!!!!!!! */}
        <div className="todo-container">
          <AddTodoForm addTodo={this.handleAddTodo.bind(this)} />
          <TodoList
            todos={visibleTodos}
            toggleTodo={this.handleToggleTodo.bind(this)}
            removeTodo={this.handleRemoveTodo.bind(this)}
          />
        </div>
        {visibleTodos && showClearCompleted && hasCompleted && (
          <span
            onClick={this.handleRemoveCompleted.bind(this)}
            className="btn-clear-all"
          >
            Clear completed
          </span>
        )}
      </div>
    );
  }
}

export default App;
