import React, { Component } from "react";
import "./Stats.css";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { allData } = this.props;
    return allData ? (
      <div className="global-data-component">
        <div className="all-data total-cases">Total Cases: {allData.cases}</div>
        <div className="all-data total-death">
          Total Deaths: {allData.deaths}
        </div>
        <div className="all-data total-recovered">
          Total Recovered: {allData.recovered}
        </div>
        <div className="all-data last-updated">
          Last Updated: {allData.updated}
        </div>
      </div>
    ) : null;
  }
}

export default Stats;
