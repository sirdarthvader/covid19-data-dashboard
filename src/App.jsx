import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import India from "./Components/India/India";
import World from "./Components/World/World";
import Datasource from "./Components/Datasource/Datasource";
import About from "./Components/About/About";
import Upcoming from "./Components/Upcoming/Upcoming";
import ReactGA from "react-ga";
import States from "./Components/States/States";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      loading: true,
      error: {},
      currentView: "home",
      worldData: null,
      lastUpdated: "",
      allCountryData: [],
      listOfCountries: []
    };
  }

  componentDidMount() {
    this._getWorldData();
    this._getAllCountryData();
    this._initialiseGA();
  }

  componentDidUpdate(prevProps, prevState) {
    //check for all change country data
    if (prevState.allCountryData !== this.state.allCountryData) {
      if (this.state.allCountryData.length) {
        this._listCountries(this.state.allCountryData);
      }
    }
    //check for change in world data
    if (prevState.worldData !== this.state.worldData) {
      if (this.state.worldData !== null) {
        this._getLastUpdatedTime(this.state.worldData);
      }
    }
  }

  /**
   * Initialise Google analytics
   */
  _initialiseGA = () => {
    ReactGA.initialize("UA-161697051-1");
    ReactGA.pageview("/");
  };

  /**
   * @description get all country data and make a list of countries
   * @param {array} data array of all the countries effected so far
   */
  _listCountries = data => {
    let country_arr = data.map((item, index) => {
      let country_obj = {};
      let name = item.country;
      let code = name.substring(0, 2);
      country_obj.name = name;
      country_obj.code = code;
      return country_obj;
    });
    this.setState({
      listOfCountries: country_arr
    });
  };

  /**
   * @description Helper to get current selected tab from navbar
   * @param {*} tab current screen to be viewed
   */
  _getCurrentTab = tab => {
    this.setState({
      currentView: tab
    });
    if (tab === "home") {
      this._closeNav();
    }
  };

  /**
   * @description check if the responsive navbar is switched visible,
   *  if it is then find it and close it.
   */
  _closeNav = () => {
    let toggler = document.getElementById("res-mob-tog");
    let width = window.innerWidth;
    //aplicable only for mobile view
    if (width < 700) {
      toggler.click();
    }
  };

  /**
   * @description get data for all countries effecte by coronavirus
   */
  _getAllCountryData = () => {
    fetch(`https://corona.lmao.ninja/countries`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            allCountryData: result,
            loading: false
          });
        },
        //check for errors
        error => {
          this.setState({
            loading: false,
            hasError: true,
            error
          });
        }
      );
  };

  /**
   *  @description Get all country data as a fallback
   */
  _getWorldData = () => {
    fetch(`https://corona.lmao.ninja/all`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            worldData: result,
            loading: false
          });
        },
        //check for errors
        error => {
          this.setState({
            loading: false,
            hasError: true,
            error
          });
        }
      );
  };

  /**
   * Helper to get last updated time
   * @param {dateObject} dateobject returned by API
   */
  _getLastUpdatedTime = data => {
    let today = new Date(data.updated);
    let date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    this.setState({
      lastUpdated: dateTime
    });
  };

  render() {
    const { currentView, listOfCountries, worldData, lastUpdated } = this.state;
    return (
      <div className="App">
        <Header getCurrentTab={this._getCurrentTab} />
        <main className="main">
          {currentView === "home" ? (
            <Jumbotron />
          ) : currentView === "india" ? (
            <India closeNav={this._closeNav} lastUpdated={lastUpdated} />
          ) : currentView === "world" ? (
            <World
              closeNav={this._closeNav}
              listOfCountries={listOfCountries}
              worldData={worldData}
              lastUpdated={lastUpdated}
            />
          ) : currentView === "source" ? (
            <Datasource closeNav={this._closeNav} />
          ) : currentView === "about" ? (
            <About closeNav={this._closeNav} />
          ) : currentView === "upcoming" ? (
            <Upcoming closeNav={this._closeNav} />
          ) : currentView === "states" ? (
            <States closeNav={this._closeNav} />
          ) : null}
        </main>
      </div>
    );
  }
}
