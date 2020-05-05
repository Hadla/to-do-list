import React from 'react';

class AddTodo extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

    render() {
        return (
            <div className="addTodoContainer">
                <form onSubmit={(event) => { this.submitTodo(event) }}>
                    <input onChange={(event) => this.updateInput(event)} type="text"></input>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
    updateInput = (event) => {
        this.setState({todo: event.target.value})
    }
    submitTodo = (event) => {
        event.preventDefault();
        this.props.addTodoFunc(this.state.todo)

    }
}

export default AddTodo;