import React from 'react';
import logo from './logo.svg';
import './App.css';

const todoList1 = [
  { completed: true, priority: 1, content: 'Complete demo' },
  { completed: true, priporiy: 2, content: 'Complete demo 2' },
  { completed: true, priporiy: 1, content: 'Complete demo 2' },
  { completed: true, priporiy: 2, content: 'Complete demo 2' },
  { completed: false, priporiy: 3, content: 'Complete demo 3' }
]
function TodoList(props){
  return <p>${props.content}</p>
}

function App () {
  return(
    <todoItem content = "Contents" />
  );
}
export default App;
