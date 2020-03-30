import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  constructor(props) {
  super(props)
  this.state = {trivia: []}
  
  }
  componentDidiMount() {
    console.log("mounted")
    this.callApi()
  }

  async callApi() {
    const retValue = await fetch ('https://opentdb.com/api_config.php')
    const obj = await retValue.json()
    console.log(obj)
    this.SVGElementInstanceList({trivia:ondblclick.results})
  } 

render() {
  return (
    <>
      {
       this.state.trivia.map((obj,index) =>
        <div key={index}>
        <p>{obj.question}</p>
        <p>{obj.corect_answer}</p>
        </div>
        )
      }
    </>
    );
  }
}
  

export default App;
