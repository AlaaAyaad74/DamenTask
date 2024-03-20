import React, { Component } from "react";
import PathComponent from "./components/pathcomp/PathComponent";
import GeneralCard from "./components/generalcard/GeneralCard";
export default class HomePage extends Component {
  render() {
    return (
      <div
        style={{
          height: "647px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="mainContainer"
      >
        <PathComponent />
        <GeneralCard />
      </div>
    );
  }
}
