import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import India from "./Components/India/India";

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

  componentDidMount() {}

  /**
   * Function to call data for a specific country
   */
  _getCountryData = id => {
    // get data to call and get data for any specific country
  };

  /**
   * actual function call to get data from open API.
   */
  _getAllCountryData = () => {
    // ? get alll the country data at once
  };

  /**
   * Get country level news
   */
  _getCountryNews = id => {
    //get country specific data
  };

  /**
   * Get all global news data
   */
  _getGlobalNews = id => {
    //Get all global level news data
  };

  /**
   * Helper to get current selected tab from navbar
   */
  _getCurrentTab = tab => {
    this.setState({
      currentView: tab
    });
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
            <India />
          ) : null}
        </main>
      </div>
    );
  }
}
