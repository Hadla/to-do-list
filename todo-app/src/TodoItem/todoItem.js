import React from 'react';
import './style.css';

class TodoItem extends React.Component {
    render() {

        const { todo } = this.props;

        return (
        <div className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.toggleTodo}>{todo.text}</div>
        );
    }

    // Whenever you toggle a todo you want to change it from being default to being complete.
    toggleTodo = () => {
        this.props.updateTodoFunc(this.props.todo)
    }
}

export default TodoItem;