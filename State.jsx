import React from "react";
function handleClick() {
  // let click;
  //let tt = [1, 2, 3, 4, 5];
  //let button = {};

  // if ((click = document.getElementsByClassName("btn").value)) {
  //button = document.getElementsByClassName("btn btn-info").value;
  //} else if ((click = document.getElementsByClassName("btn ").value)) {
  //button = document.getElementsByClassName("btn btn-secondary").value;
  //}
  //button.handleClick;

  return console.log("You clicked Me");
}

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      in: true,
      out: false,
      A: "login",
      B: "logout",
      loggin: "loggin",
      inLoggedIn: true,
      kepp: "hahahaha",
    };
    this.handleClick3 = this.handleClick3.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  handleClick3() {
    this.setState((logCh) => {
      return {
        inLoggedIn: !logCh.inLoggedIn,
      };
    });
  }
  onMouseMove() {
    let text1 = "Abass";
    this.setState((mouse) => {
      return {
        inLoggedIn: mouse.inLoggedIn + text1,
      };
    });
  }
  render() {
    var loggin = "in";
    let workDisplay;
    this.state.in = "login";
    this.state.out = this.state.B;
    //new logged();
    //const texts =

    if ((this.state.in = true)) {
      this.state.in = "login";
      workDisplay = "in";
    } else if ((this.state.out = false)) {
      this.state.out = console.log(this.state.B);
    } else if ((this.state.in = true)) {
      this.state.in = loggin;
    }
    return (
      <div style={{ padding: "1rem", fontStyle: "italic" }}>
        <h6 className="tryMe">You re currently {this.state.in}</h6>
        <h6>You re currently {this.state.out}</h6>
        <h6>You re currently {loggin}</h6>
        <h6>You re currently {workDisplay}</h6>
        <h6
          onMouseMove={
            () => {
              if (this.state.inLoggedIn === true) {
                return <h4>{this.state.kepp}</h4>;
              }
              //this.state.out === false;
              else {
                return console.log("OFF");
              }
            }
            //this.state.inLoggedIn ? "o" : "mm";
            //this.state.inLoggedIn + this.state.inLoggedIn ? "ON" : "OFF";
          }
        >
          You re currently {this.state.inLoggedIn ? "ON" : "OFF"}
          {/*this.state.inLoggedIn + this.state.inLoggedIn ? "ON" : "OFF"*/}
        </h6>
        <h4 onMouseMove={() => (this.state.kepp ? "ONE" : "TWO")}>
          {this.state.kepp}
        </h4>
        <div>
          <img src="https://drscdn.500px.org/photo/1015681092/m%3D256/v2?sig=208849181902d8b20fd8b99e058d97678147581b2a2d66c8817bf12449cc2fbb" />
          <br />
          <br />
          <button onClick={handleClick} className="btn btn-info">
            Click Me
          </button>{" "}
          <button onClick={handleClick} className="btn btn-warning ">
            Click Me
          </button>
        </div>
      </div>
    );
  }
}

export default State;
