import React from "react";
//import State from "./State";
//import { render } from "@testing-library/react";

class Conditional extends React.Component {
  constructor() {
    super();
    this.state = {
      logout: "logout",
      login: true,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.logout} </h1>
        <h2>{this.state.login}</h2>;
      </div>
    );
  }
}

//function Conditional(props) {

export default Conditional;
