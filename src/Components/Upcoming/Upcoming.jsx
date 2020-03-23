import React, { Component } from "react";
import "./style.css";

export default class Upcoming extends Component {
  componentDidMount() {
    this.props.closeNav();
  }

  render() {
    return (
      <div className="container mt-5">
        <ul className="list-group">
          <li className="list-group-item">
            Ability to show data for every specific state through out the
            country
          </li>
          <li className="list-group-item">
            Get historical data from the start of 2020. (JHU CSSE GISand Data)
          </li>
          <li className="list-group-item">
            Get historical data from the start of 2020 for a specific country.
            (JHU CSSE GISand Data)
          </li>
          <li className="list-group-item">
            Show Hospitals & bed stats (India){" "}
          </li>
          <li className="list-group-item">
            Notifications & advisories (India)
          </li>
          <li className="list-group-item">
            Add support for regional language!
          </li>
        </ul>
      </div>
    );
  }
}
