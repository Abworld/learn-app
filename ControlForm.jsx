import React from "react";

class ControlForm extends React.Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      value: "",
      FirstName: "",
      LastName: "",
      Age: "",
      Location: "  ",
      vegetarial: false,
      lactose: false,
      koshier: false,
      houseColor: "   ",
    };
    this.handleChange9 = this.handleChange9.bind(this);
    this.handleChange10 = this.handleChange9.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange9(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const fullName = this.state.FirstName + this.state.LastName;
    console.log(
      "Please be informed that these are the information you provided : " +
        " you're " +
        fullName +
        " , " +
        this.state.gender +
        "  - age is " +
        this.state.Age +
        " years old and currently resides in " +
        this.state.Location +
        ". Here is your dietary status : for vegatarian - " +
        this.state.vegetarial +
        " for koshier:  " +
        this.state.koshier +
        ", while lactose is " +
        this.state.lactose +
        /* this.state.vegetarial +
        this.state.koshier +
        this.state.lactose +*/
        ". You own a beautiful " +
        this.state.houseColor +
        " colored house."
    );
    event.preventDefault();
  }
  handleChange10(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    //const fullName = this.state.FirstName + this.state.LastName;
    //const fullName =
    const styles = {
      padding: "1rem",
      backgroundColor: "#6495ed",
      //#6495ed //#ffb6c1
      fontWeight: "bold",
    };
    /*const value1 = this.state.houseColor;
    function houseCol() {
      if (value1 === "yellow") {
        styles.backgroundColor = "green";
      } else if (value1 === "blue") {
        styles.backgroundColor = "teal";
      } else if (value1 === "green") {
        styles.backgroundColor = "yellow";
      } else {
        styles.backgroundColor = "crimson";
      }
    } */
    return (
      <div style={styles}>
        <main>
          <form
            onSubmit={this.handleSubmit}
            onClick={(this.handleChange9, this.handleChange10)}
          >
            <input
              // venue={this.state.FirstName}
              placeholder="First Name"
              name="FirstName"
              type="text"
              onChange={this.handleChange9}
            />{" "}
            <br />
            <input
              placeholder="Last Name"
              name="LastName"
              type="text"
              onChange={this.handleChange9}
            />{" "}
            <br />
            <input
              placeholder="Age"
              name="Age"
              type="text"
              onChange={this.handleChange9}
            />{" "}
            <br />
            <label>
              <input
                type="checkbox"
                name="vegetarial"
                checked={this.state.vegetarial}
                //value="vegetarial"
                onChange={this.handleChange9}
              />
              vegetables?
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="lactose"
                checked={this.state.lactose}
                //value="lactose"
                onChange={this.handleChange9}
              />
              lactose free?
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="koshier"
                checked={this.state.koshier}
                //value="koshier"
                onChange={this.handleChange9}
              />
              koshier?
            </label>
            <br />
            <label style={{ marginLeft: "5px" }}>
              Male:{" "}
              <input
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleChange9}
              />
            </label>
            <label style={{ marginLeft: "5px" }}>
              Female:{" "}
              <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleChange9}
              />
            </label>
            <br />
            <label style={{ margin: "5px" }}> Location:</label>
            <select
              name="Location"
              value={this.state.Location}
              onChange={this.handleChange9}
              id=""
            >
              <option value="  ">-- select your location --</option>
              <option value="Ojota">Ojota</option>
              <option value="Ikeja">Ikeja</option>
              <option value="Maryland">Maryland</option>
              <option value="Surulere">Surulere</option>
              <option value="Island">Island</option>
            </select>
            <label style={{ margin: "5px" }}> House Paint:</label>
            <select
              name="houseColor"
              value={this.state.houseColor}
              onChange={this.handleChange10}
              id=""
            >
              <option value="   ">-- select house color --</option>
              <option
                style={{ backgroundColor: "blue", color: "teal" }}
                value="blue"
              >
                blue
              </option>
              <option
                style={{ backgroundColor: "green", color: "yellow" }}
                value="green"
              >
                green
              </option>
              <option
                style={{ backgroundColor: "yellow", color: "green" }}
                value="yellow"
              >
                yellow
              </option>
              <option
                style={{ backgroundColor: "orange", color: "aqua" }}
                value="orange"
              >
                orange
              </option>
              <option
                style={{ backgroundColor: "pink", color: "black" }}
                value="pink"
              >
                pink
              </option>
            </select>
            {/* create a radio button for gender  */}
            <br />
            {/* create a select button for location here  */}
            <button
              type="Submit"
              className="btn btn-warning"
              onSubmit={this.handleSubmit}
              onChange={this.handleChange9 + this.handleChange10}
            >
              Submit
            </button>
            <hr className="my-2" />
            <h1>Entered information: </h1>
            <p>
              Your name: {this.state.FirstName}
              {this.state.LastName}{" "}
            </p>
            {/*<p> Full name: {fullName}</p>*/}
            <p>What is your sex ? {this.state.gender} </p>
            <p>Your Age: {this.state.Age} </p>
            <p>
              {" "}
              I now resides in luxary apartment at {" " +
                this.state.Location}{" "}
              {" " + this.state.value}
            </p>
            <p>Kindly select your diet type: </p>
            <p>
              vegetarial: {this.state.vegetarial ? " I' m vegetrian" : "No"}
            </p>
            <p>koshier: {this.state.koshier ? "  I' m koshier" : "No"}</p>
            <p>
              lactose free: {this.state.lactose ? "  I don't lactose" : "No"}
            </p>
            <p>with a beautiful {this.state.houseColor} color paint!</p>
          </form>
        </main>
      </div>
    );
  }
}

export default ControlForm;
