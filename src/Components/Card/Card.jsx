import React, { Component } from "react";

export default class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { bg, header, value, total } = this.props;
    let valuePercentage = (value / total) * 100;
    return (
      <div
        className={`card mr-3 mb-3`}
        style={{
          maxWidth: "18rem"
        }}
      >
        <div className="card-header">{header}</div>
        <div className="card-body">
          <p className="card-text">{value}</p>
          <p>{valuePercentage.toFixed(2)} % of total cases</p>
        </div>
      </div>
    );
  }
}
