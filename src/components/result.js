import React, { Component } from 'react';

class Result extends Component {
  generateRow2(val1, val2) {
    return (
      <tr>
        <td>{val1}</td>
        <td>{val2}</td>
      </tr>
    )
  }

  generateRow3(val1, val2, val3, key) {
    return (
      <tr key={key}>
        <td>{val1}</td>
        <td>{val2}</td>
        <td>{val3}</td>
      </tr>
    )
  }

  generateAllPossibleNetworkRow() {
    return this.props.allPossibleNetwork.map((data, index) => {
      return this.generateRow3(data.networkAddress, data.usableHostRange, data.broadcastAddress, index)
    })
  }

  generateAllPossibleNetworkHeader() {
    if(this.props.subnetValue <= 7)
      return <h2>All Possible {this.props.cidr} Networks</h2>
    else
      return   <h2>All Possible {this.props.cidr} Networks for {this.props.networkAddressForH1}</h2>
  }

  render() {
    return (
      <div>
        <h2>Result</h2>
        <table>
          <tbody>
            { this.generateRow2('IP Address', this.props.ipAddress) }
            { this.generateRow2('Network Address', this.props.networkAddress) }
            { this.generateRow2('Usable Host IP Range', this.props.usableHostIPRange) }
            { this.generateRow2('Broadcast Address', this.props.broadcastAddress) }
            { this.generateRow2('Total Number of Hosts', this.props.hosts) }
            { this.generateRow2('Number of Usable Hosts', this.props.usableHosts) }
            { this.generateRow2('Subnet Mask', this.props.subnetNumber) }
            { this.generateRow2('Wildcard Mask', this.props.wildcardMask) }
            { this.generateRow2('Binary Subnet Mask', this.props.binarySubnetMask) }
            { this.generateRow2('IP Class', this.props.ipClass) }
            { this.generateRow2('CIDR Notation', this.props.cidr) }
            { this.generateRow2('IP Type', this.props.ipType) }
            { this.generateRow2('Short', this.props.ipAddress + this.props.cidr) }
            { this.generateRow2('Binary ID', this.props.binaryID) }
            { this.generateRow2('Integer ID', this.props.integerID) }
            { this.generateRow2('Hex ID', this.props.hexID) }
          </tbody>
        </table>


        {this.generateAllPossibleNetworkHeader()}
        <table>
          <thead>
            <tr>
              <td>Network Address</td>
              <td>Usable Host Range</td>
              <td>Broadcast Address</td>
            </tr>
          </thead>
          <tbody>
            {this.generateAllPossibleNetworkRow()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Result;
