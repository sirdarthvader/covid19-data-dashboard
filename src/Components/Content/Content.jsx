import React, { Component } from "react";
import "./Content.css";
import Card from "../Card/Card";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { loading, data } = this.props;
    return (
      <>
        <Card
          header={"Total"}
          color={"primary"}
          key={1}
          dataLoading={loading}
          value={data.cases}
          total={data.cases}
        />
        <Card
          header={"Active"}
          color={"orange"}
          key={2}
          dataLoading={loading}
          value={data.active}
          total={data.cases}
        />
        <Card
          header={"Death"}
          color={"death"}
          key={3}
          dataLoading={loading}
          value={data.deaths}
          total={data.cases}
        />
        <Card
          header={"Recovered"}
          color={"green"}
          key={4}
          dataLoading={loading}
          value={data.recovered}
          total={data.cases}
        />
        {data.todayCases ? (
          <Card
            header={"Today Cases"}
            color={"red"}
            key={5}
            dataLoading={loading}
            value={data.todayCases}
            total={data.cases}
          />
        ) : null}
        {data.todayDeaths ? (
          <Card
            header={"Today Deaths"}
            color={"red"}
            key={6}
            dataLoading={loading}
            value={data.todayDeaths}
            total={data.cases}
          />
        ) : null}

        {data.critical ? (
          <Card
            header={"Critical"}
            color={"hotpink"}
            key={7}
            dataLoading={loading}
            value={data.critical}
            total={data.cases}
          />
        ) : null}
      </>
    );
  }
}
export default Content;
