import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'



const toDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      toDo : toDo
    }
  }

  addTask = taskName =>{
    this.setState({
      ...this.state,
      toDo: [
        ...this.state.toDo,
        {
          task: taskName,
          id: Date.now(),
          completed:false
        }
      ]
    })
  }

  toggleTask = taskId =>{
    const updateToDo = this.state.toDo.map(item => {
      if (taskId === item.id) {
        return {...item, completed: !item.completed}
      }
      return item;
    });
    console.log("updated array", updateToDo);
    this.setState({
      ...this.setState({
        ...this.state,
        toDo: updateToDo
      })
    });
  }

  clearFinished = e =>{
    e.preventDefault();
    this.setState({
      ...this.state,
      toDo: this.state.toDo.filter(item => !item.completed)
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='app'>
        <TodoForm addTask={this.addTask} />
        <h2>Whatcha Doing?</h2>
        <TodoList toggleTask={this.toggleTask} clearFinished={this.clearFinished} toDo={this.state.toDo} />
      </div>
    );
  }
}

export default App;
