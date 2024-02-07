import { createStore } from "redux";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_ALL_COMPLETED = "REMOVE_ALL_COMPLETED";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { todos: updatedTodos };
    case TOGGLE_TODO:
      const upTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return {todos: upTodos}

    case REMOVE_ALL_COMPLETED:
        const updaTodos = state.todos.filter(
            (todo) => !todo.completed
          );
        return {todos: updaTodos}
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
