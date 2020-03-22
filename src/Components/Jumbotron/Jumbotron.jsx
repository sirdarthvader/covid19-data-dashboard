import React, { Component } from "react";

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-5 text-break">Coronavirus Disease</h1>
        </div>
        <div
          className="container"
          style={{
            marginTop: "50px"
          }}
        >
          <p className="h3 yellow underline">About</p>
          <p>
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            new virus. The disease causes respiratory illness (like the flu)
            with symptoms such as a cough, fever, and in more severe cases,
            difficulty breathing. You can protect yourself by{" "}
            <span className="underline">
              {" "}
              washing your hands frequently, avoiding touching your face, and
              avoiding close contact (1 meter or 3 feet) with people who are
              unwell.{" "}
            </span>
          </p>
        </div>
        <div
          className="container"
          style={{
            marginTop: "50px"
          }}
        >
          <p className="h3 yellow underline">How It Spreads</p>
          <p>
            Coronavirus disease spreads primarily through contact with an
            infected person when they cough or sneeze. It also spreads when a
            person touches a surface or object that has the virus on it, then
            touches their eyes, nose, or mouth.
          </p>
        </div>
      </div>
    );
  }
}
