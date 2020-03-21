import React, { Component } from "react";
import "./Content.css";
// import Main from "../Main/Stats";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { currentView } = this.props;
    return (
      <div className="main-content">
        {currentView === "stats" ? (
          <div className="statistics">
            <h2>This is the statistics page.</h2>
          </div>
        ) : (
          <div className="news">
            <h4>He is always the bearer of sad news.</h4>
          </div>
        )}
      </div>
    );
  }
}
export default Content;
