import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "stats"
    };
  }

  /**
   * Get curret tab data and pass it back to parent component.
   */
  _changeTabs = tab => {
    this.setState({
      currentView: tab
    });
    this.props.changeView(tab);
  };

  render() {
    const { currentView } = this.state;
    return (
      <div className="header-bar">
        <div className="left">
          <div className="website-header yellow">
            <span className="green">
              COVID<span className="red">19</span>
            </span>
          </div>
        </div>
        <div className="right">
          <div
            className={
              currentView === "stats"
                ? "yellow-background nav-link"
                : "nav-link"
            }
            onClick={() => this._changeTabs("stats")}
          >
            <div className="link">Stats</div>
          </div>
          <div
            className={
              currentView === "news" ? "yellow-background nav-link" : "nav-link"
            }
            onClick={() => this._changeTabs("news")}
          >
            <div className="link">News</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
