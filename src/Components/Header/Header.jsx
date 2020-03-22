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
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <div className="dropdown-item" href="#">
                  Data Source
                </div>
                <div className="dropdown-item" href="#">
                  <span className="pink">Coming Soon!</span>
                </div>
                <div className="dropdown-item" href="#">
                  About
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
