import React, { Component } from "react";
import "./style.css";
import PulseLoader from "../PulseLoader/PulseLoader";
export default class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let {
      color,
      header,
      value,
      total,
      dataLoading,
      deaths,
      discharged,
      foreign,
      indian
    } = this.props;
    let valuePercentage = (value / total) * 100;
    foreign = String(foreign);
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
              {total && value ? (
                <div className="card-percentage">
                  {valuePercentage.toFixed(2)} % of total cases
                </div>
              ) : null}
              {indian ? (
                <div className="indian-state">
                  {foreign || indian ? (
                    <div>Total : {foreign + indian}</div>
                  ) : null}
                  {foreign ? <div>Foreign Cases : {foreign}</div> : null}
                  {indian ? <div>Indian Cases : {indian}</div> : null}
                  {discharged ? <div>Discharged : {discharged}</div> : null}
                  {deaths ? <div>Deaths : {deaths}</div> : null}
                </div>
              ) : null}
            </div>
          </>
        )}
      </div>
    );
  }
}
