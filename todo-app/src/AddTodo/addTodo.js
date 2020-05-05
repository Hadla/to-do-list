import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './style.css';


class AddTodo extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

    render() {
        return (
            <div>
                <div className="todoTitle">To Do</div>
                <div className="addTodoContainer">
                    <form onSubmit={(event) => { this.submitTodo(event) }}>
                        <input className="inputField" id="addTodoInput" placeholder="Write here..." onChange={(event) => this.updateInput(event)} type="text"></input>
                        <Button size="small" className={makeStyles.margin} type="submit">Add Todo</Button>
                    </form>
                </div>
            </div>
        );
    }
    updateInput = (event) => {
        this.setState({ todo: event.target.value })
    }
    submitTodo = (event) => {
        event.preventDefault();
        this.props.addTodoFunc(this.state.todo)
        document.getElementById('addTodoInput').value = '';

    }
}

export default AddTodo;