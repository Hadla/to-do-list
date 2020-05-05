import React from 'react';
import TodoItem from '../TodoItem/todoItem';

class TodoList extends React.Component {

    render() {

        const { todos } = this.props;

        return (
            <div className="todoListContainer">
                {
                    todos.map((_todo, _index) => {
                        return (
                            <TodoItem updateTodoFunc={this.updateTodo} key={_index} todo={_todo}></TodoItem>
                        )
                    })
                }
            </div>
        );
    }
    
    updateTodo = (todo) => {
        this.props.updateTodoFunc(todo);
    }
}

export default TodoList;