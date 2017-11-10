import React, { Component } from 'react';
import ip from 'ip';
import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import InputBlock from './components/input-block'
import Result from './components/result'

class App extends Component {
  constructor(props) {
    super(props)
    let baseIP = "158.108.0.1";
    let baseNetworkAddress = "158.108.0.0";
    let baseIPClass = "C";
    let baseWildcardMask = "0.0.0.255";
    let baseCIDR = 24;
    let baseIPType = "Public";

    this.state = {
      hasResult: false,
      networkClass: "any",
      options: this.generateSubnet(32),

      ip: baseIP,
      networkAddress: baseNetworkAddress,
      subnetValue: baseCIDR,
      wildcardMask: baseWildcardMask,
      ipClass: baseIPClass,
      cidr: "/" + baseCIDR,
      ipType: baseIPType,

      commitIP: baseIP,
      commitNetworkAddress: baseNetworkAddress,
      commitSubnetValue: baseCIDR,
      commitWildcardMask: baseWildcardMask,
      commitIPClass: baseIPClass,
      commitCIDR: "/" + baseCIDR,
      commitType: baseIPType,
    }
  }

  networkClassHandler(event) {
    this.setState({networkClass: event.target.value}, this.manageOptions)
  }

  subnetHandler(event) {
    this.setState({
      subnetValue: event.target.value,
      cidr: "/" + event.target.value,
      ipClass: this.calIPClass(event.target.value),
      wildcardMask: ip.not(ip.fromPrefixLen(event.target.value)),
      networkAddress: ip.mask(this.state.ip, ip.fromPrefixLen(event.target.value)),
    })
  }

  ipHandler(event) {
    this.setState({ip: event.target.value})
    if(ip.isV4Format(event.target.value)) {
      this.setState({
        networkAddress: ip.mask(event.target.value, ip.fromPrefixLen(this.state.subnetValue)),
        ipType: ip.isPrivate(event.target.value) ? "Private" : "Public",
      })
    }
  }

  commit() {
    this.setState({
      hasResult: true,
      commitIP: this.state.ip,
      commitNetworkAddress: this.state.networkAddress,
      commitSubnetValue: this.state.subnetValue,
      commitWildcardMask: this.state.wildcardMask,
      commitIPClass: this.state.ipClass,
      commitCIDR: this.state.cidr,
      commitIPType: this.state.ipType,
    })
  }

  clear() {
    this.setState({ hasResult: false })
  }

  generateSubnet(quantity) {
    return Array(quantity).fill().map((_, i) => {
      return {
        name: ip.fromPrefixLen(32-i) + ' / ' + (32-i),
        value: 32-i,
        number: ip.fromPrefixLen(32-i)
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

  calIPClass(subnetValue) {
    if(subnetValue >= 24)
      return "C";
    else if(subnetValue >= 16)
      return "B";
    else if(subnetValue >= 8)
      return "A";
    else
      return "None";
  }

  render() {
    return (
      <div className="App">
        <Header />
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
          subnetNumber={ip.fromPrefixLen(this.state.subnetValue)}
          ip={this.state.ip}

          commitIP={this.state.commitIP}
          commitNetworkAddress={this.state.commitNetworkAddress}
          commitSubnetNumber={ip.fromPrefixLen(this.state.commitSubnetValue)}
          commitWildcardMask={this.state.commitWildcardMask}
          commitIPClass={this.state.commitIPClass}
          commitCIDR={this.state.commitCIDR}
          commitIPType={this.state.commitIPType}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
