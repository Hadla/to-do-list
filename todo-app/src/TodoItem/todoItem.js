import React from 'react';
import './style.css';
import Checkbox from '@material-ui/core/Checkbox';

class TodoItem extends React.Component {

    render() {
        const { todo } = this.props;

        return (
            <div className="todoParent">
                <div className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.toggleTodo}> 
                
                {todo.text}
                {/* <Checkbox
                    disabled
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }} className="checkbox"/> */}
                </div>
               
            </div>
        );
    }

    // Whenever you toggle a todo you want to change it from being default to being complete.
    toggleTodo = () => {
        this.props.updateTodoFunc(this.props.todo)
    }
}

export default TodoItem;