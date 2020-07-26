import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.closeNav();
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="container">
            <div className="h3 yellow-background">Open Source Project</div>
            <p className="lead">
              This open source project is maintained by{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/sirdarthvader"
              >
                Ashish Singh
              </a>{" "}
              on Github.
            </p>
            <p className="lead">
              Github Repo:{" "}
              <a
                className="yellow-background"
                rel="noopener noreferrer"
                href="https://github.com/ashishcodes4/fluffy-octo-goggles"
                target="_blank"
              >
                Link
              </a>
            </p>
            <p className="lead">
              If you consider yourself a ninja developer, someone who likes to
              build things for internet. Feel free to connect on Github.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
