import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "home"
    };
  }

  /**
   * Helper for changing tabs
   * @param {*} tab provide name of tab for navigation,
   * same will be passed back to parent component
   */
  changeTabs = tab => {
    this.setState(
      {
        current: tab
      },
      () => {
        this.props.getCurrentTab(tab);
      }
    );
  };

  changeTabs;

  render() {
    const { current } = this.state;
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark covid-custom-navbar">
        <div className="navbar-brand" onClick={() => this.changeTabs("home")}>
          <span className="green">
            COVID<span className="red"> 19</span>
          </span>
        </div>
        <button
          className="navbar-toggler"
          id="res-mob-tog"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li
              className={current === "india" ? "nav-item active" : "nav-item"}
              onClick={() => this.changeTabs("india")}
            >
              <div className="nav-link">India</div>
            </li>
            <li
              className={current === "world" ? "nav-item active" : "nav-item"}
              onClick={() => this.changeTabs("world")}
            >
              <div className="nav-link">World</div>
            </li>
            <li
              className={current === "source" ? "nav-item active" : "nav-item"}
              onClick={() => this.changeTabs("source")}
            >
              <div className="nav-link">Source</div>
            </li>
            <li
              className={
                current === "upcoming" ? "nav-item active" : "nav-item"
              }
              onClick={() => this.changeTabs("upcoming")}
            >
              <div className="nav-link">Upcoming!!</div>
            </li>
            <li
              className={current === "about" ? "nav-item active" : "nav-item"}
              onClick={() => this.changeTabs("about")}
            >
              <div className="nav-link">About</div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
