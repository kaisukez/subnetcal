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
    this.state = {
      hasResult: false,
      networkClass: "any",
      options: this.generateSubnet(32),
      ip: "158.108.12.34",
      isIPValid: true,

      ipAddress: "158.108.12.34",
      networkAddress: "158.108.12.0",
      usableHostIPRange: "158.108.12.1 - 158.108.12.254",
      broadcastAddress: "158.108.12.255",
      hosts: "256",
      usableHosts: "254",
      subnetValue: "24",
      wildcardMask: "0.0.0.255",
      ipClass: "C",
      cidr: "/24",
      ipType: "Public",
      networkAddressForH1: "158.108.12.*",
      allPossibleNetwork: Array(1).fill().map((_, i) => {
        let newNetworkAddress = ip.fromLong(ip.toLong("158.108.12.0") + (256 * i));
        let obj = ip.subnet(newNetworkAddress, ip.fromPrefixLen("24"))
        return {
          networkAddress: newNetworkAddress,
          usableHostRange: obj.firstAddress + ' - ' + obj.lastAddress,
          broadcastAddress: obj.broadcastAddress,
        }
      }),
    }
  }

  networkClassHandler(event) {
    this.setState({
      networkClass: event.target.value,
      subnetValue: 24,
    }, this.manageOptions)
  }

  subnetHandler(event) {
    let obj = ip.cidrSubnet(this.state.ip + '/' + event.target.value);
    let usableHostIPRange, hosts, usableHosts
    if(event.target.value === '31') {
      usableHostIPRange = "None";
      hosts = 2;
      usableHosts = 0;
    } else if(event.target.value ==='32') {
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
      networkAddressForH1: this.calNetworkAddressForH1(ip.mask(this.state.ip, ip.fromPrefixLen(event.target.value)), event.target.value),
      allPossibleNetwork: this.calAllPossibleNetwork(ip.mask(this.state.ip, ip.fromPrefixLen(event.target.value)), event.target.value),
    })
  }

  ipHandler(event) {
    this.setState({ip: event.target.value});

    if(ip.isV4Format(event.target.value) && event.target.value.split('.').every(e => e <= 255)) {
      let obj = ip.cidrSubnet(event.target.value + '/' + this.state.subnetValue);
      let usableHostIPRange, hosts, usableHosts
      if(this.state.subnetValue ==='31') {
        usableHostIPRange = "None";
        hosts = 2;
        usableHosts = 0;
      } else if(this.state.subnetValue === '32') {
        usableHostIPRange = "None";
        hosts = 1;
        usableHosts = 0;
      } else {
        usableHostIPRange = obj.firstAddress + ' - ' + obj.lastAddress;
        hosts = ip.toLong(obj.lastAddress) - ip.toLong(obj.firstAddress) + 1 + 2;
        usableHosts = ip.toLong(obj.lastAddress) - ip.toLong(obj.firstAddress) + 1;
      }

      this.setState({
        isIPValid: true,
        ipAddress: event.target.value,
        networkAddress: ip.mask(event.target.value, ip.fromPrefixLen(this.state.subnetValue)),
        ipType: ip.isPrivate(event.target.value) ? "Private" : "Public",
        broadcastAddress: obj.broadcastAddress,
        usableHostIPRange,
        hosts,
        usableHosts,
        networkAddressForH1: this.calNetworkAddressForH1(ip.mask(event.target.value, ip.fromPrefixLen(this.state.subnetValue)), this.state.subnetValue),
        allPossibleNetwork: this.calAllPossibleNetwork(ip.mask(event.target.value, ip.fromPrefixLen(this.state.subnetValue)), this.state.subnetValue),
      })
    } else {
      this.setState({isIPValid: false})
    }
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

  calAllPossibleNetwork(networkAddress, subnetValue) {
    let offset = 2 ** (32 - subnetValue);
    let round = this.calRound(subnetValue);
    networkAddress = this.calNetworkAddressFromPrefix(networkAddress, subnetValue);

    return (
      Array(round).fill().map((_, i) => {
        let newNetworkAddress = ip.fromLong(ip.toLong(networkAddress) + (offset * i));
        let obj = ip.subnet(newNetworkAddress, ip.fromPrefixLen(subnetValue))
        let usableHostRange = obj.firstAddress + ' - ' + obj.lastAddress;
        if(subnetValue >= 31)
          usableHostRange = "None";
        return {
          networkAddress: newNetworkAddress,
          usableHostRange: usableHostRange,
          broadcastAddress: obj.broadcastAddress,
        }
      })
    )
  }

  calRound(subnetValue) {
    if(subnetValue >= 24)
      return 2 ** (subnetValue - 24);
    else if(subnetValue >= 16)
      return 2 ** (subnetValue - 16);
    else if(subnetValue >= 8)
      return 2 ** (subnetValue - 8);
    else
      return 2 ** subnetValue;
  }

  calNetworkAddressFromPrefix(networkAddress, subnetValue) {
    if(subnetValue >= 24)
      return ip.mask(networkAddress, ip.fromPrefixLen(24))
    else if(subnetValue >= 16)
      return ip.mask(networkAddress, ip.fromPrefixLen(16))
    else if(subnetValue >= 8)
      return ip.mask(networkAddress, ip.fromPrefixLen(8))
    else
      return ip.mask(networkAddress, ip.fromPrefixLen(0))
  }

  calNetworkAddressForH1(networkAddress, subnetValue) {
    let newNetworkAddress
    if(subnetValue >= 24)
      newNetworkAddress = networkAddress.split('.').map((d, i) => i >= 3 ? '*' : d).join('.');
    else if(subnetValue >= 16)
      newNetworkAddress = networkAddress.split('.').map((d, i) => i >= 2 ? '*' : d).join('.');
    else if(subnetValue >= 8)
      newNetworkAddress = networkAddress.split('.').map((d, i) => i >= 1 ? '*' : d).join('.');
    else
      newNetworkAddress = networkAddress.split('.').map(() => '*').join('.');
    return newNetworkAddress;
  }

  render() {
    let binarySubnetMask = ip.toLong(ip.fromPrefixLen(this.state.subnetValue)).toString(2);
    binarySubnetMask = [binarySubnetMask.slice(0,8), '.', binarySubnetMask.slice(8,16), '.', binarySubnetMask.slice(16,24), '.', binarySubnetMask.slice(24)]

    return (
      <div className="App">
        <Header />
        <InputBlock
          networkClassHandler={this.networkClassHandler.bind(this)}
          subnetHandler={this.subnetHandler.bind(this)}
          ipHandler={this.ipHandler.bind(this)}
          options={this.state.options}
          subnetValue={this.state.subnetValue}
          ip={this.state.ip}
          isIPValid={this.state.isIPValid}
        />
        <Result
          hasResult={this.state.hasResult}
          networkClass={this.state.networkClass}
          subnetValue={this.state.subnetValue}
          subnetNumber={ip.fromPrefixLen(this.state.subnetValue)}
          ip={this.state.ip}

          ipAddress={this.state.ipAddress}
          networkAddress={this.state.networkAddress}
          usableHostIPRange={this.state.usableHostIPRange}
          broadcastAddress={this.state.broadcastAddress}
          hosts={this.state.hosts}
          usableHosts={this.state.usableHosts}
          // subnetNumber={ip.fromPrefixLen(this.state.subnetValue)}
          wildcardMask={this.state.wildcardMask}
          binarySubnetMask={binarySubnetMask}
          ipClass={this.state.ipClass}
          cidr={this.state.cidr}
          ipType={this.state.ipType}
          networkAddressForH1={this.state.networkAddressForH1}
          allPossibleNetwork={this.state.allPossibleNetwork}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
