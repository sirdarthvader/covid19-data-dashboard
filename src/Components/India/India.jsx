import React, { Component } from "react";
import PulseLoader from "../PulseLoader/PulseLoader";
import Card from "../Card/Card";

export default class India extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrangedData: [],
      data: "",
      loading: true,
      hasError: false,
      error: null
    };
  }

  /**
   *
   * @param {*} prevProps previous props for current component
   * @param {*} prevState previous state for current component
   */
  componentDidUpdate(prevProps, prevState) {
    //check if data prop changed over time, if it did, get the array
    if (prevState.data !== this.state.data) {
      this._arrangeData(this.state.data);
    }
  }

  /**
   * Invoked only once after the component has loaded for the first time
   */
  componentDidMount() {
    this._getData();
  }

  /**
   * @param {*} data this is the data returned by the API
   * this data would be taken and converted from an object to an array
   */
  _arrangeData = data => {
    let dataArr = [];
    for (let [key, value] of Object.entries(data)) {
      let currObj = {};
      currObj[key] = value;
      dataArr.push(currObj);
      // console.log(`${key}: ${value}`);
    }
    console.log(dataArr);
    this.setState({
      arrangedData: dataArr,
      loading: false
    });
  };

  /**
   * @param {*} * this will be used to fetch data related to Indian states
   */
  _getData = () => {
    fetch("https://corona.lmao.ninja/countries/india")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            data: result
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
    const { loading } = this.state;
    return (
      <div className="container" style={{}}>
        {loading ? (
          <PulseLoader />
        ) : (
          <div
            className="summary"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <Card
              header={"Total"}
              key={1}
              bg={"bg-light"}
              value={this.state.data.cases}
              total={this.state.data.cases}
            />
            <Card
              header={"Active"}
              key={2}
              value={this.state.data.active}
              total={this.state.data.cases}
            />
            <Card
              header={"Death"}
              key={3}
              value={this.state.data.deaths}
              total={this.state.data.cases}
            />
            <Card
              header={"Recovered"}
              key={4}
              value={this.state.data.recovered}
              total={this.state.data.cases}
            />
            <Card
              header={"Recovered"}
              key={5}
              value={this.state.data.recovered}
              total={this.state.data.cases}
            />
          </div>
        )}
      </div>
    );
  }
}
