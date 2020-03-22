import React, { Component } from "react";
import COUNTRIES from "../Data/data.json";
import "./style.css";
import Content from "../Content/Content";

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      loading: true,
      hasError: false,
      error: null,
      data: {}
    };
  }

  componentDidMount() {
    this.props.closeNav();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.country !== this.state.country) {
      this._getData(this.state.country);
    }
  }

  /**
   * @description Helper to set local state with state value
   * @param {*} value selected state from options
   */
  onStateSelect = () => {
    let country = document.getElementById("sel-cnt").value;
    this.setState({
      country
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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
    return (
      <div className="container-fluid">
        <div className="summary">
          <div className="country-dropdown">
            Select country to get data
            <div
              className="field"
              style={{ width: "200px", marginTop: "20px" }}
            >
              <select
                className="custom-select"
                id="sel-cnt"
                onChange={this.onStateSelect}
              >
                <option defaultValue>Select Country</option>
                {COUNTRIES && COUNTRIES.length
                  ? COUNTRIES.map(option => (
                      <option key={option.code} value={option.name}>
                        {option.name}
                      </option>
                    ))
                  : null}
              </select>
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
            <Content loading={loading} data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default World;
