import { TodoItem } from "./index";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";

function TodoList({ todos, toggleTodo, removeTodo }) {
  //OVI UVOZI PREKO PROPS MOGU BITI I FUNKCIJE, U OVOM SLUČAJU EVENT HANDLERI!!!
  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      ))}
    </ListGroup>
  );
}

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  removeTodo: PropTypes.func,
};
