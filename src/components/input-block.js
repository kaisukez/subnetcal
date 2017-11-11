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
      return <div className="input-row" id="invalid-ip">invalid ipv4</div>
    else
      return null;
  }

  render() {
    return (
      <div className="my-box input-box">
        <div className="input-row row">
          <div className="input-text col-3">Network Class</div>
          <div className="col-9">
            <input type="radio" name="class" value="any" id="any" onChange={this.props.networkClassHandler} defaultChecked={true}/>
            <label htmlFor="any">Any</label>

            <input type="radio" name="class" value="a" id="a" onChange={this.props.networkClassHandler}/>
            <label htmlFor="a">A</label>

            <input type="radio" name="class" value="b" id="b" onChange={this.props.networkClassHandler}/>
            <label htmlFor="b">B</label>

            <input type="radio" name="class" value="c" id="c" onChange={this.props.networkClassHandler}/>
            <label htmlFor="c">C</label>
          </div>
        </div>

        <div className="input-row row">
          <div className="input-text col-3">Subnet</div>
          <div className="col-9">
            <select
              onChange={this.props.subnetHandler}
              value={this.props.subnetValue}
            >
              {this.renderOptions()}
            </select>
          </div>
        </div>

        <div className="input-row row">
          <div className="input-text col-3">IP Address</div>
          <div className="col-9">
            <input
              type="text"
              onChange={this.props.ipHandler}
              value={this.props.ip}
            />
            {this.generateError()}
          </div>
        </div>

      </div>
    );
  }
}

export default InputBlock;
