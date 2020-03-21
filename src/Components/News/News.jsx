import React, { Component } from "react";
import "./News.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="news-container">
        <div className="page-header">
          <h1>New from Around the world</h1>
        </div>
      </div>
    );
  }
}

export default News;
