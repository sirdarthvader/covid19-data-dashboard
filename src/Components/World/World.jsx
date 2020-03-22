import React, { Component } from "react";
import "./style.css";
import Content from "../Content/Content";
import PulseLoader from "../PulseLoader/PulseLoader";

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      loading: true,
      hasError: false,
      error: null,
      data: null,
      worldData: null,
      lastUpdated: ""
    };
  }

  componentDidMount() {
    this.props.closeNav();
    this._getWorldData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.country !== this.state.country) {
      this._getData(this.state.country);
    }
    if (prevState.worldData !== this.state.worldData) {
      if (this.state.worldData !== null) {
        this._getLastUpdatedTime(this.state.worldData);
      }
    }
  }

  /**
   * Helper to get last updated time
   */
  _getLastUpdatedTime = data => {
    let today = new Date(data.updated);
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    this.setState({
      lastUpdated: dateTime
    });
  };

  /**
   * @description Helper to set local state with state value
   * @param {*} value selected state from options
   */
  onStateSelect = () => {
    let country = document.getElementById("sel-cnt").value;
    this.setState({
      country,
      loading: true
    });
  };

  /**
   * @param {*} country this will be used to fetch data related to any country in the world
   */
  _getData = country => {
    fetch(`https://corona.lmao.ninja/countries/${country}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            data: result
            // loading: false
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
            worldData: result
            // loading: false
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
    const { loading, data, worldData, lastUpdated } = this.state;
    const { listOfCountries } = this.props;

    return (
      <div className="container-fluid">
        <div className="summary">
          <div className="country-dropdown">
            Select country to get data
            <div
              className="field"
              style={{ width: "300px", marginTop: "20px" }}
            >
              <select
                className="custom-select"
                id="sel-cnt"
                onChange={this.onStateSelect}
              >
                <option defaultValue>Select the country</option>
                {listOfCountries && listOfCountries.length
                  ? listOfCountries.map((option, index) => (
                      <option key={index} value={option.name}>
                        {option.name}
                      </option>
                    ))
                  : null}
              </select>
              <div className="last-updated">
                Last Data Update: <strong>{lastUpdated}</strong>
              </div>
            </div>
          </div>
          <div
            className="country-data"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "20px"
            }}
          >
            <>
              {this.state.data !== null ? (
                <Content loading={loading} data={data} />
              ) : this.state.worldData !== null ? (
                <Content loading={loading} data={worldData} />
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                  }}
                >
                  <div className="first yellow-background">
                    All Good and Bad things take time....
                  </div>
                  <div
                    className="second"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%"
                    }}
                  >
                    <PulseLoader width={"200px"} height={"200px"} mr={"20px"} />
                    <PulseLoader width={"200px"} height={"200px"} mr={"20px"} />
                  </div>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    );
  }
}

export default World;
