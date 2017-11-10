import React, { Component } from 'react';

class Result extends Component {
  generateRow(name, value) {
    return (
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    )
  }

  render() {
    if(!this.props.hasResult) {
      return null;
    }

    return (
      <div>
        <p>state: {this.props.networkClass}</p>
        <p>subnetNumber: {this.props.subnetNumber}</p>
        <p>ip: {this.props.ip}</p>
        -------------
        <table>
          <tbody>
            { this.generateRow('IP Address', this.props.commitIP) }
            { this.generateRow('Subnet Mask', this.props.commitSubnetNumber) }
            { this.generateRow('Wildcard Mask', this.props.commitWildcardMask) }
            { this.generateRow('IP Class', this.props.commitIPClass) }
            { this.generateRow('CIDR Notation', this.props.commitCIDR) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Result;
