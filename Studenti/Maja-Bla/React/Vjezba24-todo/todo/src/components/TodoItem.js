import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

class TodoItem extends React.Component {


handleToggleTodoClick(){

  const { todo, toggleTodo } = this.props;

  toggleTodo(todo.id)
}


handleRemoveTodoClick(){
  

}
  render () {

    const { todo } = this.props;
    const textClass = todo.completed ? 'todo-item_text todo-item_completed' : 'todo-item_text';


    return(
      <ListGroup.Item className='todo-item'>
        <span className='todo-item_item' onClick={this.handleToggleTodoClick.bind(this)}>
        <Form.Check readOnly checked={todo.completed}/> 
        <span className={textClass}>{todo.text}</span>
        </span>
        <span className='todo-item_delete-button' onClick={this.handleRemoveTodoClick.bind(this) }> X </span>
      </ListGroup.Item>

    );
  }
}

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.object,
  toggleTodo: PropTypes.func,
  removeTodo: PropTypes.func
};