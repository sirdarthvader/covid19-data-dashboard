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
      error: {},
      currentView: "home",
      allCountryData: [],
      listOfCountries: []
    };
  }

  componentDidMount() {
    this._getAllCountryData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.allCountryData !== this.state.allCountryData) {
      if (this.state.allCountryData.length) {
        this._listCountries(this.state.allCountryData);
      }
    }
  }

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
    toggler.click();
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

  render() {
    const { currentView, listOfCountries } = this.state;
    return (
      <div className="App">
        <Header getCurrentTab={this._getCurrentTab} />
        <main className="main">
          {currentView === "home" ? (
            <Jumbotron />
          ) : currentView === "india" ? (
            <India closeNav={this._closeNav} />
          ) : currentView === "world" ? (
            <World
              closeNav={this._closeNav}
              listOfCountries={listOfCountries}
            />
          ) : null}
        </main>
      </div>
    );
  }
}
