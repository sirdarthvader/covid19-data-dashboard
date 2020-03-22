/**
 * PROP API
 * Takes 2 props, width and height normal css values for both the props
 
 
 * FOR better results, try keeping this in a container and add some padding to it 
 * while leaving the container take 100% widtha dn height of its parent container
 */

import React, { Component } from "react";
import "./style.css";

class PulseLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let height = this.props.height || "15px";
    let width = this.props.width || "";
    let margin = this.props.margin || "0";
    return (
      <div
        className="pulse-loader-animation"
        style={{
          height: `${height}`,
          width: `${width === "" ? null : width}`,
          margin: `${margin}`
        }}
      ></div>
    );
  }
}

export default PulseLoader;
