import React, { Component } from 'react';

class InputBlock extends Component {
  renderOptions() {
     return (
      this.props.options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        )
      })
    )
  }

  generateError() {
    if(!this.props.isIPValid)
      return <span id="invalid-ip">invalid ipv4</span>
    else
      return null;
  }

  render() {
    return (
      <div>
        <div className="network-class">
          Network Class
          <input type="radio" name="class" value="any" id="any" onChange={this.props.networkClassHandler} defaultChecked={true}/>
          <label htmlFor="any">Any</label>

          <input type="radio" name="class" value="a" id="a" onChange={this.props.networkClassHandler}/>
          <label htmlFor="a">A</label>

          <input type="radio" name="class" value="b" id="b" onChange={this.props.networkClassHandler}/>
          <label htmlFor="b">B</label>

          <input type="radio" name="class" value="c" id="c" onChange={this.props.networkClassHandler}/>
          <label htmlFor="c">C</label>
        </div>

        <div className="subnet">
          Subnet
          <select
            onChange={this.props.subnetHandler}
            value={this.props.subnetValue}
          >
            {this.renderOptions()}
          </select>
        </div>

        <div className="ip-input">
          IP Address
          <input
            type="text"
            onChange={this.props.ipHandler}
            value={this.props.ip}
          />
        </div>
        {this.generateError()}
      </div>
    );
  }
}

export default InputBlock;
