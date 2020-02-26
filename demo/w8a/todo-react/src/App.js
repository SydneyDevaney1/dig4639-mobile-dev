import React from 'react';
//import logo from './logo.svg';
import './App.css';
import todoList from './todoList.json'
//import { render } from 'react-dom';

class TodoItem extends React.Component{
  render() {
  return <p className='card'>{this.props.content}<input type="button" value= "x" 
  onClick={() => this.props.removeTask(this.props.id)} /></p>
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todoList: todoList,
      showOnlyUncompletedTasks: false
    }
  }
  removeTask(taskID){
    console.log(this.state.todoList)
    console.log(taskID)
    console.log(this.state.todoList[0].id)
    let newList = this.state.todoList.filter((task)=>(task.id !== taskID))
    console.log(newList)
    this.setState({ todoList:newList})
  }

 addTask() {
   console.log(this.refs.taskContent.value)
   let newtask = 
   { "id":this.currentID, "content": "Task 3", "priority": 3, "completed": false }
   this.currentID++;
   let currentList = this.state.todoList
   currentList.push(newtask)
   this.setState({ todoList: currentList})
 } 
render() {
  return (
  <>
  <div className="inputTask">
    <input type="text" ref="taskContent"/>
    <select name="priority" ref=""priority>
      <option value="1"> 1</option>/>
      <option value="2"> 2 </option>/>
      <option value="3">3</option>/>
    </select>
   <input type="button" value="Add Task" onClick={() => this.addTask()} /> 
    <br/>
    <input type="checkbox" ref="completedFilter" id="completedFilter" name="completedFilter"
    onChange={(e) => this.setState({showOnlyUncompletedTasks: e.target.checke})} value="completed" />
  <label htmlFor="completedFilter"> Show only uncompleted tasks</label>
  </div>
  {(this.completedFilter ? this.state.todoList.fliter((v) => v.completed) 
      : 
    this.state.todoList)
    .map((v, i) => <TodoItem key={i} priority={v.priority} 
    removeTask={(id) => this.removeTask.id}
    content={v.content} completed={v.completed}/>)}
  </>
  );
  }
}

export default App;
