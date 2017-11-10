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
        <button onClick={this.props.commit}>Calculate</button>
        <button onClick={this.props.clear}>Clear</button>
      </div>
    );
  }
}

export default InputBlock;
