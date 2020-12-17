import React, { Component } from 'react';
import './App.css';
import Inputs from './components/input'
import Outputs from './components/output'

class App extends Component {
  state={
    messages:[] 
  }

  onInput=(text)=>{
    let messages= this.state.messages
    messages.push(text)
    this.setState({messages})
  }

  render() { 
    return (
      <div>
        <nav className="navbar navbar-light bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand text-light fw-bold" href="/">Stress Reliever</a>
            <a className="navbar-brand text-light fst-italic" href="/aboutus">About us</a>
          </div>
        </nav>
        <div className="container mt-4">
          <Inputs onInput={this.onInput}/>
          <Outputs messages={this.state.messages}/>
        </div>
      </div>
    );
  }
}
 
export default App;
