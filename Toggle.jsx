import React from "react";
//import TestRenderer from "react-test-renderer";
//const TestRenderer = require("react-text-renderer");
//import { render } from '@testing-library/react';

// TestRenderer
//function Link(props) {
//return <a href={props.page}>{props.children}</a>;
//}
//const testRenderer = TestRenderer.create(
//<Link page="https://www.facebook.com/">Facebook</Link>
//);
//console.log(testRenderer.toJSON());

class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      sex: "male",
      isloggleOn: true,
      count: 0,
      multiply: 2 * 2 + 4,
      isLoading1: true,
      hasLogIn: true,
      logIn: "logIn",
      logOut: "logOut",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    //this binding is neccssary to make 'this' work in callback
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading1: false,
      });
    }, 1586);
    //}
  }
  handleClick() {
    this.setState((logMe) => ({
      isloggleOn: !logMe.isloggleOn,
    }));
  }
  handleClick2() {
    this.setState((logged) => {
      return {
        hasLogIn: !logged.hasLogIn,
        //logged.hasLogIn + this.state.logOut,
        //this.state.logIn && this.state.logOut,
      };
    });
    //if (this.state.hasLogIn === true) {
    //return this.state.hasLogIn + this.state.logIn;
    //} else {
    // return this.state.hasLogIn + this.state.logOut;
    // }
  }

  handleClick1() {
    this.setState((preState) => {
      return {
        count: preState.count + 1 + this.state.multiply,
        //count: preState.count + 1; will add +1 for each click
      };
    });
    console.log(this.state.count);
    //console.log{this.state.count}
  }

  render() {
    let buttonText = this.state.hasLogIn ? "LOGIN" : "LOGOUT";
    let displayText = this.state.hasLogIn ? "LogOUt" : "LogIn";
    return (
      <div style={{ backgroundColor: "#eee", padding: "1rem" }}>
        test:{" "}
        <h3>
          {this.props.togg.name}
          {this.state.isLoading1 ? (
            <span> Loading at 3:14...</span>
          ) : (
            "  Yeah bluffing "
          )}
        </h3>
        <p>
          Question- {this.props.togg.sex} Answer:
          {this.state.sex}
        </p>
        <img
          onMouseOver={() => console.log("Hovered")}
          src={this.props.togg.img}
          alt=""
        />{" "}
        <br />
        <a> {this.props.togg.More}</a>
        <button onClick={this.handleClick} className="btn btn-danger">
          {this.state.isloggleOn ? "SWITCH ON" : "SWITCH OFF"}
        </button>
        <div style={{ backgroundColor: "#000" }}>
          <h1
            style={{
              color: "crimson",
              fontSize: "2rem",
            }}
          >
            {this.state.count}
          </h1>
          <button onClick={this.handleClick1} className="btn btn-danger">
            PRESS
          </button>{" "}
          <span style={{ color: "white" }}>
            <h5 style={{ paddingLeft: "4px" }}>
              {this.state.hasLogIn ? "LOGIN" : "LOGOUT"}
            </h5>
            <button onClick={this.handleClick2} className="btn btn-warning">
              {buttonText}
            </button>
            <h5 style={{ paddingLeft: "4px" }}>{displayText}</h5>
          </span>
        </div>
      </div>
    );
  }
}

export default Toggle;
