import React, { Component } from "react";
import Card from "../Card/Card";

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hasError: null,
      error: null,
      indianStates: [],
      stateData: [],
      selectedState: "",
      selected: ""
    };
  }

  componentDidMount() {
    this.getStateWiseData();
    this.props.closeNav();
  }

  componentDidUpdate(prevProps, prevState) {
    //check for change in indian states
    if (prevState.indianStates !== this.state.indianStates) {
      this._sortData(this.state.indianStates);
    }

    //check for change in selected state
    if (prevState.selectedState !== this.state.selectedState) {
      this._showStateCard(this.state.selectedState);
    }
  }

  /**
   * @description see selected state and show respective card
   */
  _showStateCard = data => {
    const { indianStates } = this.state;
    let selectState = indianStates.filter(state => data === state.loc);
    this.setState({
      selected: selectState[0]
    });
  };

  /**
   * @description get received data and add markers
   */
  _sortData = data => {
    let updated_data = data.map((state, index) => {
      return {
        id: index + 1,
        ...state
      };
    });
    this.setState({
      stateData: updated_data
    });
  };

  /**
   * @description API call for fetching all the state data
   */
  getStateWiseData = () => {
    fetch(`https://api.rootnet.in/covid19-in/stats/latest`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            indianStates: result.data.regional
          });
        },
        //check for errors
        error => {
          this.setState({
            loading: false,
            hasError: false,
            error
          });
        }
      );
  };

  /**
   * @description for selecting state
   */
  onStateSelect = data => {
    let state = document.getElementById("sel-sta").value;
    this.setState({
      selectedState: state
    });
  };

  render() {
    const { indianStates, selected } = this.state;
    return (
      <div className="container-fluid">
        <div className="summary">
          <div className="country-dropdown">
            Select state to get data
            <div
              className="field"
              style={{ width: "300px", marginTop: "20px" }}
            >
              <select
                className="custom-select"
                id="sel-sta"
                onChange={id => this.onStateSelect(id)}
              >
                <option defaultValue>Select State</option>
                {indianStates && indianStates.length
                  ? indianStates.map((option, index) => (
                      <option key={index} value={option.id}>
                        {option.loc}
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
            <>
              {selected ? (
                <Card
                  header={selected.loc}
                  deaths={selected.deaths}
                  discharged={selected.discharged}
                  foreign={selected.confirmedCasesForeign}
                  indian={selected.confirmedCasesIndian}
                />
              ) : null}
            </>
          </div>
        </div>
      </div>
    );
  }
}

export default States;
