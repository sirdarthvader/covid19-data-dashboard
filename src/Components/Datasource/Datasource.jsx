import React, { Component } from "react";
import "./style.css";

export default class Datasource extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.closeNav();
  }

  render() {
    return (
      <div className="container mt-5">
        <ul className="list-group">
          <li className="list-group-item">
            All the data comes from{" "}
            <a
              className="yellow-background"
              href=" https://www.worldometers.info/coronavirus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WorldoMeters
            </a>
          </li>
          <li className="list-group-item">
            The above source relies heavily on{" "}
            <a
              className="yellow-background"
              href="https://www.who.int/data/gho/info/athena-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHO Athena API
            </a>
          </li>
          <li className="list-group-item">
            John Hopkins Resource Center{" "}
            <a
              className="yellow-background"
              href="https://coronavirus.jhu.edu/map.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              (JHU CSSE GISand Data)
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
