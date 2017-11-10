import React, { Component } from 'react';
import ip from 'ip';
import './App.css';

import InputBlock from './components/input-block'
import Result from './components/result'

class App extends Component {
  constructor(props) {
    super(props)
    let baseIP = "158.108.0.1";
    let baseSubnet = "255.255.255.0";

    this.state = {
      hasResult: false,

      networkClass: "any",
      subnetValue: baseSubnet,
      subnetNumber: 24,
      ip: baseIP,
      options: this.generateSubnet(32),

      commitIP: baseIP,
      commitSubnetValue: baseSubnet,
      commitNetworkClass: "any",
    }
  }

  networkClassHandler(event) {
    this.setState({networkClass: event.target.value}, this.manageOptions)
  }

  subnetHandler(event) {
    this.setState({subnetValue: event.target.value})
  }

  ipHandler(event) {
    this.setState({ip: event.target.value})
  }

  commit() {
    this.setState({
      commitNetworkClass: this.state.networkClass,
      commitSubnetValue: this.state.subnetValue,
      commitIP: this.state.ip,
      hasResult: true
    })
  }

  clear() {
    this.setState({ hasResult: false })
  }

  generateSubnet(quantity) {
    return Array(quantity).fill().map((_, i) => {
      return {
        name: ip.fromPrefixLen(32-i) + ' / ' + (32-i),
        number: 32-i,
        value: ip.fromPrefixLen(32-i)
      }
    })
  }

  manageOptions() {
    let options
    if (this.state.networkClass === "any") {
      options = this.generateSubnet(32)
    }
    if (this.state.networkClass === "a") {
      options = this.generateSubnet(25)
    }
    if (this.state.networkClass === "b") {
      options = this.generateSubnet(17)
    }
    if (this.state.networkClass === "c") {
      options = this.generateSubnet(9)
    }
    this.setState({ options })
  }

  calIPClass() {

  }

  render() {
    return (
      <div className="App">
        <InputBlock
          networkClassHandler={this.networkClassHandler.bind(this)}
          subnetHandler={this.subnetHandler.bind(this)}
          ipHandler={this.ipHandler.bind(this)}
          commit={this.commit.bind(this)}
          clear={this.clear.bind(this)}
          options={this.state.options}
          subnetValue={this.state.subnetValue}
          ip={this.state.ip}
        />
        <Result
          hasResult={this.state.hasResult}
          networkClass={this.state.networkClass}
          subnetValue={this.state.subnetValue}
          ip={this.state.ip}
          commitIP={this.state.commitIP}
          commitSubnetValue={this.state.commitSubnetValue}
          commitNetworkClass={this.state.commitNetworkClass}
        />
      </div>
    );
  }
}

export default App;
