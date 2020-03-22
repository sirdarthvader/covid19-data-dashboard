import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Jumbotron from "./Components/Jumbotron/Jumbotron";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      loading: true,
      currentView: "stats",
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
    fetch("https://corona.lmao.ninja/all")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            all: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            hasError: true,
            error
          });
        }
      );
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
   * Helper to change view or tab
   */
  _changeView = tab => {
    this.setState({
      currentView: tab
    });
  };

  render() {
    return (
      <div className="App">
        <Header changeView={this._changeView} />
        <main className="main">
          <Jumbotron />
        </main>
        <Footer />
      </div>
    );
  }
}
