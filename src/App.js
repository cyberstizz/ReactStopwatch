import React from 'react';
import './App.css';
import Buttons from './components/Buttons';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      counting: false
    }
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.reset = this.reset.bind(this)


  }
  
  start(){
    this.counter = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        counting: true
      })
    }, 1000)
  
  }

  stop(){
    clearInterval(this.counter)
    this.setState({
      count: this.state.count,
      counting: false
    })
  
  }

  reset(){
    this.setState({
      count: 0,
      counting: false
    })
  }

  render(){
    if(this.state.counting === false){
      clearInterval(this.start)
    }
  return (
    <div className="App">
    <h1>{this.state.count}</h1>
    <button onClick={this.start}>Start</button> <button onClick={this.stop}>Stop</button> <button onClick={this.reset}>Reset</button>
    </div>
  );
}
}
export default App;
