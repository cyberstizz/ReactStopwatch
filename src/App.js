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
    this.pause = this.pause.bind(this)


  }
  start(){
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  stop(){
    clearInterval(this.start)
    this.setState({
      count: this.state.count
    })
  }

  pause(){

  }

  render(){
  return (
    <div className="App">
    <h1>{this.state.count}</h1>
    <button onClick={this.start}>Start</button> <button onClick={this.stop}>Stop</button> <button onClick={this.pause}>Reset</button>
    </div>
  );
}
}
export default App;
