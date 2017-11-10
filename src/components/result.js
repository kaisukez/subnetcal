import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div>
        <p>state: {this.props.networkClass}</p>
        <p>subnet: {this.props.subnet}</p>
        <p>ip: {this.props.ip}</p>
        <p>commit state: {this.props.commitNetworkClass}</p>
        <p>commit subnet: {this.props.commitSubnet}</p>
        <p>commit ip: {this.props.commitIP}</p>
      </div>
    );
  }
}

export default Result;
