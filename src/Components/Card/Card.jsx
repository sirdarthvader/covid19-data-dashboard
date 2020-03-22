import React, { Component } from "react";
import "./style.css";
import PulseLoader from "../PulseLoader/PulseLoader";
export default class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { color, header, value, total, dataLoading } = this.props;
    let valuePercentage = (value / total) * 100;
    return (
      <div
        className={`card mr-3 ${color} mb-3`}
        style={
          dataLoading
            ? {
                maxWidth: "18rem",
                minWidth: "18rem",
                minHeight: "18rem"
              }
            : {
                maxWidth: "18rem",
                minWidth: "18rem"
              }
        }
      >
        {dataLoading ? (
          <PulseLoader width={"100%"} height={"100%"} />
        ) : (
          <>
            <div className="card-header">{header}</div>
            <div className="card-body">
              <div className="card-value">{value}</div>
              <div className="card-percentage">
                {valuePercentage.toFixed(2)} % of total cases
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
