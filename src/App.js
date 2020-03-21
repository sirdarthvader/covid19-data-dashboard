import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
// import { config } from "./config";
// const { PRIMARY, SECONDARY } = config;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "stats",
      all: {},
      countries: {},
      individualCountry: {},
      currentCountry: {}
    };
  }

  componentDidMount() {
    //call function to fetch data for overall world data
    this._getAllCountryData();
  }

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
   * Helper to change view or tab
   */
  _changeView = tab => {
    this.setState({
      currentView: tab
    });
  };

  render() {
    // const { all } = this.state;
    return (
      <div className="App">
        <Header changeView={this._changeView} />
        <Content currentView={this.state.currentView} />
        <Footer />
      </div>
    );
  }
}
