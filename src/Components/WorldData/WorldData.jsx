import React, { Component } from "react";

export default class WorldData extends Component {
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
      </>
    );
  }
}
