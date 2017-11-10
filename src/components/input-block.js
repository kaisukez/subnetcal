import React, { Component } from 'react';

class InputBlock extends Component {
  render() {
    return (
      <div>
        <div className="network-class">
          Network Class
          <input type="radio" name="class" value="any" id="any" onChange={this.props.networkClassHandler}/>
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
          >
            <option value="haha">haha</option>
            <option value="eiei">eiei</option>
          </select>
        </div>

        <div className="ip-input">
          IP Address
          <input type="text" onChange={this.props.ipHandler}/>
        </div>
        <button
          onClick={this.props.commit}
        >
          Calculate
        </button>
      </div>
    );
  }
}

export default InputBlock;
