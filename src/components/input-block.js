import React, { Component } from 'react';

class InputBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      networkClass: "any",
      subnet: "192",
      ip: "158.108.0.0"
    }
  }

  networkClassHandler(event) {
    this.setState({networkClass: event.target.value})
  }

  subnetHandler(event) {
    this.setState({subnet: event.target.value})
  }

  ipHandler(event) {
    this.setState({ip: event.target.value})
  }

  render() {
    return (
      <div>
        <div className="network-class">
          Network Class
          <input type="radio" name="class" value="any" id="any" onChange={this.networkClassHandler.bind(this)}/>
          <label htmlFor="any">Any</label>

          <input type="radio" name="class" value="a" id="a" onChange={this.networkClassHandler.bind(this)}/>
          <label htmlFor="a">A</label>

          <input type="radio" name="class" value="b" id="b" onChange={this.networkClassHandler.bind(this)}/>
          <label htmlFor="b">B</label>

          <input type="radio" name="class" value="c" id="c" onChange={this.networkClassHandler.bind(this)}/>
          <label htmlFor="c">C</label>
        </div>

        <div className="subnet">
          Subnet
          <select onChange={this.subnetHandler.bind(this)}>
            <option value="haha">haha</option>
            <option value="eiei">eiei</option>
          </select>
        </div>

        <div className="ip-input">
          IP Address
          <input type="text" onChange={this.ipHandler.bind(this)}/>
        </div>
        <button>Calculate</button>
        <p>state: {this.state.networkClass}</p>
        <p>subnet: {this.state.subnet}</p>
        <p>ip: {this.state.ip}</p>
      </div>
    );
  }
}

export default InputBlock;
