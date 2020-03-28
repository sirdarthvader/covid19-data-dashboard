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
    if (!data && !loading) {
      return null;
    }
    return (
      <>
        <Card
          header={"Total"}
          color={"primary"}
          key={1}
          dataLoading={loading}
          value={data && data.cases}
          total={data && data.cases}
        />
        {data.active ? (
          <Card
            header={"Active"}
            color={"orange"}
            key={2}
            dataLoading={loading}
            value={data && data.active}
            total={data && data.cases}
          />
        ) : null}
        <Card
          header={"Death"}
          color={"death"}
          key={3}
          dataLoading={loading}
          value={data && data.deaths}
          total={data && data.cases}
        />
        <Card
          header={"Recovered"}
          color={"green"}
          key={4}
          dataLoading={loading}
          value={data && data.recovered}
          total={data && data.cases}
        />
        {data.todayCases ? (
          <Card
            header={"Today Cases"}
            color={"red"}
            key={5}
            dataLoading={loading}
            value={data && data.todayCases}
            total={data && data.cases}
          />
        ) : null}
        {data.todayDeaths ? (
          <Card
            header={"Today Deaths"}
            color={"red"}
            key={6}
            dataLoading={loading}
            value={data && data.todayDeaths}
            total={data && data.cases}
          />
        ) : null}

        {data.critical ? (
          <Card
            header={"Critical"}
            color={"hotpink"}
            key={7}
            dataLoading={loading}
            value={data && data.critical}
            total={data && data.cases}
          />
        ) : null}
      </>
    );
  }
}
export default Content;
