import React from 'react';
import '../App.css';

class Buttons extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
  return (
    <div className="App">
    <button onClick={this.props.start}>Start</button> <button onClick={this.props.stop}>Stop</button> <button onClick={this.props.reset}>Reset</button>
    </div>
  );
}
}
export default Buttons;
