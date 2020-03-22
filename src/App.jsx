import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import India from "./Components/India/India";
import World from "./Components/World/World";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      loading: true,
      currentView: "home",
      all: {},
      countries: {},
      individualCountry: {},
      currentCountry: {}
    };
  }

  /**
   * @description Helper to get current selected tab from navbar
   * @param {*} tab current screen to be viewed
   */
  _getCurrentTab = tab => {
    this.setState({
      currentView: tab
    });
  };

  /**
   * @description check if the responsive navbar is switched visible,
   *  if it is then find it and close it.
   */
  _closeNav = () => {
    let toggler = document.getElementById("res-mob-tog");
    toggler.click();
  };

  render() {
    const { currentView } = this.state;
    return (
      <div className="App">
        <Header getCurrentTab={this._getCurrentTab} />
        <main className="main">
          {currentView === "home" ? (
            <Jumbotron />
          ) : currentView === "india" ? (
            <India closeNav={this._closeNav} />
          ) : currentView === "world" ? (
            <World closeNav={this._closeNav} />
          ) : null}
        </main>
      </div>
    );
  }
}
