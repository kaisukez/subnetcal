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
    let baseIP = "158.108.12.34";
    let baseNetworkAddress = "158.108.12.0";
    let baseUsableHostIPRange = "158.108.12.1 - 158.108.12.254"
    let baseBroadcastAddress = "158.108.0.255"
    let baseHosts = "256";
    let baseUsableHosts = "254";
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
      usableHostIPRange: baseUsableHostIPRange,
      broadcastAddress: baseBroadcastAddress,
      hosts: baseHosts,
      usableHosts: baseUsableHosts,
      subnetValue: baseCIDR,
      wildcardMask: baseWildcardMask,
      ipClass: baseIPClass,
      cidr: "/" + baseCIDR,
      ipType: baseIPType,

      commitIP: baseIP,
      commitNetworkAddress: baseNetworkAddress,
      commitUsableHostIPRange: baseUsableHostIPRange,
      commitBroadcastAddress: baseBroadcastAddress,
      commitHosts: baseHosts,
      commitUsableHosts: baseUsableHosts,
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
    let obj = ip.cidrSubnet(this.state.ip + '/' + event.target.value);
    let usableHostIPRange, hosts, usableHosts
    if(event.target.value == 31) {
      usableHostIPRange = "None";
      hosts = 2;
      usableHosts = 0;
    } else if(event.target.value == 32) {
      usableHostIPRange = "None";
      hosts = 1;
      usableHosts = 0;
    } else {
      usableHostIPRange = obj.firstAddress + ' - ' + obj.lastAddress;
      hosts = ip.toLong(obj.lastAddress) - ip.toLong(obj.firstAddress) + 1 + 2;
      usableHosts = ip.toLong(obj.lastAddress) - ip.toLong(obj.firstAddress) + 1;
    }

    this.setState({
      subnetValue: event.target.value,
      cidr: "/" + event.target.value,
      ipClass: this.calIPClass(event.target.value),
      wildcardMask: ip.not(ip.fromPrefixLen(event.target.value)),
      networkAddress: ip.mask(this.state.ip, ip.fromPrefixLen(event.target.value)),
      broadcastAddress: obj.broadcastAddress,
      usableHostIPRange,
      hosts,
      usableHosts,
    })
  }

  ipHandler(event) {
    this.setState({ip: event.target.value})

    if(ip.isV4Format(event.target.value)) {
      let obj = ip.cidrSubnet(event.target.value + '/' + this.state.subnetValue);
      let usableHostIPRange, hosts, usableHosts
      if(this.state.subnetValue == 31) {
        usableHostIPRange = "None";
        hosts = 2;
        usableHosts = 0;
      } else if(this.state.subnetValue == 32) {
        usableHostIPRange = "None";
        hosts = 1;
        usableHosts = 0;
      } else {
        usableHostIPRange = obj.firstAddress + ' - ' + obj.lastAddress;
        hosts = ip.toLong(obj.lastAddress) - ip.toLong(obj.firstAddress) + 1 + 2;
        usableHosts = ip.toLong(obj.lastAddress) - ip.toLong(obj.firstAddress) + 1;
      }

      this.setState({
        networkAddress: ip.mask(event.target.value, ip.fromPrefixLen(this.state.subnetValue)),
        ipType: ip.isPrivate(event.target.value) ? "Private" : "Public",
        broadcastAddress: obj.broadcastAddress,
        usableHostIPRange,
        hosts,
        usableHosts,
      })
    }
  }

  commit() {
    this.setState({
      hasResult: true,
      commitIP: this.state.ip,
      commitNetworkAddress: this.state.networkAddress,
      commitUsableHostIPRange: this.state.usableHostIPRange,
      commitBroadcastAddress: this.state.broadcastAddress,
      commitHosts: this.state.hosts,
      commitUsableHosts: this.state.usableHosts,
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
    let binarySubnetMask = ip.toLong(ip.fromPrefixLen(this.state.commitSubnetValue)).toString(2);
    binarySubnetMask = [binarySubnetMask.slice(0,8), '.', binarySubnetMask.slice(8,16), '.', binarySubnetMask.slice(16,24), '.', binarySubnetMask.slice(24)]
    
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
          commitUsableHostIPRange={this.state.commitUsableHostIPRange}
          commitBroadcastAddress={this.state.commitBroadcastAddress}
          commitHosts={this.state.commitHosts}
          commitUsableHosts={this.state.commitUsableHosts}
          commitSubnetNumber={ip.fromPrefixLen(this.state.commitSubnetValue)}
          commitWildcardMask={this.state.commitWildcardMask}
          commitBinarySubnetMask={binarySubnetMask}
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
