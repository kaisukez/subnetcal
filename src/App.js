import React, { Component } from 'react';
import './App.css';

import InputBlock from './components/input-block'
import Result from './components/result'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      networkClass: "any",
      subnet: "192",
      ip: "158.108.0.0",
      commitNetworkClass: "any",
      commitSubnet: "192",
      commitIP: "158.108.0.0"
    }
  }

  networkClassHandler(event) {
    this.setState({networkClass: event.target.value}, this.manageOptions)
  }

  subnetHandler(event) {
    this.setState({subnet: event.target.value})
  }

  ipHandler(event) {
    this.setState({ip: event.target.value})
  }

  commit() {
    this.setState({
      commitNetworkClass: this.state.networkClass,
      commitSubnet: this.state.subnet,
      commitIP: this.state.ip
    })
  }

  // times = x => f => {
  //   if (x > 0) {
  //     f()
  //     this.times(x - 1)(f)
  //   }
  // }

  times(x) {
    return funciton(f) {
      if (x > 0) {
        f()
        this.times(x - 1)(f)
      }
    }
  }

  manageOptions() {
    let options
    if (this.state.networkClass === "any")
      this.times(32)(console.log("wooo"))
  }

  render() {
    return (
      <div className="App">
        <InputBlock
          networkClassHandler={this.networkClassHandler.bind(this)}
          subnetHandler={this.subnetHandler.bind(this)}
          ipHandler={this.ipHandler.bind(this)}
          commit={this.commit.bind(this)}
        />
        <Result
          networkClass={this.state.networkClass}
          subnet={this.state.subnet}
          ip={this.state.ip}
          commitNetworkClass={this.state.commitNetworkClass}
          commitSubnet={this.state.commitSubnet}
          commitIP={this.state.commitIP}
        />
      </div>
    );
  }
}

export default App;
