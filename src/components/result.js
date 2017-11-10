import React, { Component } from 'react';

class Result extends Component {
  render() {
    if(!this.props.hasResult) {
      return null;
    }

    return (
      <div>
        <p>state: {this.props.networkClass}</p>
        <p>subnetValue: {this.props.subnetValue}</p>
        <p>ip: {this.props.ip}</p>
        -------------
        <table>
          <tbody>
            <tr>
              <td>IP Address</td>
              <td>{this.props.commitIP}</td>
            </tr>
            <tr>
              <td>Subnet Mask</td>
              <td>{this.props.commitSubnetValue}</td>
            </tr>
            <tr>
              <td>IP Class</td>
              <td>{this.props.commitNetworkClass}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Result;
