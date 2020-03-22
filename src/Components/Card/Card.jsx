import React, { Component } from "react";
import "./style.css";
export default class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { color, header, value, total } = this.props;
    let valuePercentage = (value / total) * 100;
    return (
      <div
        className={`card mr-3 ${color} mb-3`}
        style={{
          maxWidth: "18rem",
          minWidth: "18rem"
        }}
      >
        <div className="card-header">{header}</div>
        <div className="card-body">
          <div className="card-value">{value}</div>
          <div className="card-percentage">
            {valuePercentage.toFixed(2)} % of total cases
          </div>
        </div>
      </div>
    );
  }
}
