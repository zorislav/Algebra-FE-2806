import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";


class TodoItem extends React.Component {

  handleToggleTodoClick() {
    const {todo, toggleTodo} = this.props;
    //Izdvajamo samo ova dva propertia jer nam oni trebaju, iako ih ima i više
    toggleTodo(todo.id);
  }


  handleRemoveTodoClick (){
    
    const {todo, removeTodo} = this.props;
    removeTodo(todo.id);
    //Sada pozivamu ovu funkciju koju smo povezali priko props objekta
  }


  render() {
    const { todo } = this.props;
    const textClass =  todo.completed ? 'todo-item_text todo-item_completed' : 'todo-item_text';

    return (
      <ListGroup.Item className="todo-item">
        <span
          className="todo-item_item"
          onClick={this.handleToggleTodoClick.bind(this)}
        >
          <Form.Check readOnly checked={todo.completed} />
          <span className={textClass}>{todo.text}</span>
        </span>
        <span className="todo-item_delete-button" onClick={this.handleRemoveTodoClick.bind(this)}>X</span>
      </ListGroup.Item>
    );
  }
}

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.object,
  toggletodo: PropTypes.func,
  removeTodo: PropTypes.func
};
