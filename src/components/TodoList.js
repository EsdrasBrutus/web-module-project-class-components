// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from './Todo'

const TodoList = props =>{


    return(
        <div className='todo-list'>
            <div className='todo-items'>
            {props.toDo.map(item =>{
                return(<Todo toggleTask={props.toggleTask} key={item.id} item={item} />)
            })}
            </div>
         
            <button className='btn' onClick={props.clearFinished}>
                Clear Finished
            </button>
        </div>
    )
}

export default TodoList; 