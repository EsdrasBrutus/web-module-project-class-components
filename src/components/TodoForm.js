import React from 'react'

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state ={
            newTask: ''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            newTask : e.target.value
        })

    }

    submitTask = e =>{
        e.preventDefault();
        this.props.addTask(this.state.newTask)
    }

    render(){
        return(
            <form className='taskForm' onSubmit={this.submitTask}>
                <input className='text-field' value={this.state.newTask} onChange={this.handleChange} type="text" name="task" />
                <button className='btn'>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;