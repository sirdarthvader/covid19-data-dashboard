import React, { Component } from "react";
import "../Card/style.css";
import PulseLoader from "../../Components/PulseLoader/PulseLoader";

class StateCard extends Component {
  render() {
    let { header, deaths, discharged, foreign, indian } = this.props;
    foreign = String(foreign);
    return (
      <div
        className={`card mr-3 mb-3`}
      >
              {indian ? (
                <div className="indian-state">
                  {foreign || indian ? (
                    <div>Total : {Number(foreign) + indian})</div>
                  ) : null}
                  {foreign ? <div>Foreign Cases : {foreign}</div> : null}
                  {indian ? <div>Indian Cases : {indian}</div> : null}
                  {discharged ? <div>Discharged : {discharged}</div> : null}
                  {deaths ? <div>Deaths : {deaths}</div> : null}
                </div>
              ) : null}
          
          </>
        )}
      </div>
    );
  }
}

export default StateCard;
