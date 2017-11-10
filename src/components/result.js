import React, { Component } from 'react';

class Result extends Component {
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
            <tr>
              <td>IP Address</td>
              <td>{this.props.commitIP}</td>
            </tr>
            <tr>
              <td>Subnet Mask</td>
              <td>{this.props.commitSubnetNumber}</td>
            </tr>
            <tr>
              <td>IP Class</td>
              <td>{this.props.commitIPClass}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Result;
