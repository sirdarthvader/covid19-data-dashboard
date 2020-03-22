import React, { Component } from "react";
import PulseLoader from "../PulseLoader/PulseLoader";

export default class India extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  componentDidUpdate(prevProps, prevState) {}

  /**
   * Invoked only once after the component has loaded for the first time
   */
  componentDidMount() {
    this._getData();
  }

  /**
   * @param {*} * this will be used to fetch data related to Indian states
   */
  _getData = () => {
    fetch("https://corona.lmao.ninja/countries/india")
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
            hasError: true,
            error
          });
        }
      );
  };

  render() {
    const { loading } = this.state;
    return <div>{loading ? <PulseLoader /> : <div>show india data</div>}</div>;
  }
}
