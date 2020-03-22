import React, { Component } from "react";
import "./style.css";
import Content from "../Content/Content";
import PulseLoader from "../PulseLoader/PulseLoader";

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      loading: false,
      hasError: false,
      error: null,
      data: null,
      lastUpdated: ""
    };
  }

  componentDidMount() {
    this.props.closeNav();
  }

  componentDidUpdate(prevProps, prevState) {
    //check for change in selected country
    if (prevState.country !== this.state.country) {
      this._getData(this.state.country);
    }

    //check for change in coming api data
    if (prevProps.worldData !== this.props.worldData) {
      this.setState({
        loading: false
      });
    }
  }

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
            data: result,
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
    const { loading, data } = this.state;
    const { listOfCountries, worldData, lastUpdated } = this.props;

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
            </div>
          </div>
          <div className="last-updated">
            Last Data Update:{" "}
            <strong className="yellow-background"> {lastUpdated}</strong>
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
              ) : this.props.worldData !== null ? (
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
