import React from "react";
//import State from "./State";

function color() {
  const styling = { fontSize: "1.20rem" };
  const styleA = (document.getElementsByClassName("blue").style.color = "blue");
  const styleB = (document.getElementsByClassName("green").style.color =
    "green");
  if (document.getElementsByClassName === "blue") {
    return styleA, (styling.backgroundColor = "yellow");
  } else if (document.getElementsByClassName === "green") {
    return styleB, (styling.backgroundColor = "yellow");
  } else if (document.getElementsByClassName === "yellow") {
    return (
      (document.getElementsByClassName("LL").style.color = "yellow"),
      (styling.backgroundColor = "green")
    );
  } else if (document.getElementsByClassName === "red") {
    return (
      (document.getElementsByClassName("red").style.color = "red"),
      (styling.backgroundColor = "black")
    );
  } else
    return (
      (document.getElementsByClassName.style.color = "orange"),
      (styling.backgroundColor = "teal")
    );
}
function ControlComponent(props) {
  const styling = { fontSize: "1.20rem" };
  const fullName = props.firstName + props.lastName;
  return (
    <div style={{ padding: "1rem" }} className="divControl">
      <form
        onSubmit={props.handleSubmit}
        onClick={(props.handleChange8, props.handleChange5)}
        className="form-group"
      >
        <label for="exampleInputEmail1">
          Name :
          <input
            style={{ marginLeft: "7px" }}
            type="text"
            name="value"
            value={props.value}
            onChange={props.handleChange4}
            placeholder="Your name"
            //readOnly
          />
        </label>
        <button type="submit" value="submit" className="btn btn-warning">
          Submit
        </button>
        <h6>{props.value}</h6>
      </form>
      <br />
      <form className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          onChange={props.handleChange5}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          onChange={props.handleChange5}
        />{" "}
        <br />
        <textarea
          name="moreInfo"
          color="color"
          cols="23"
          rows="5"
          type="text"
          placeholder="more info"
          //checked={props.state.optionColor}
          onChange={props.handleChange5}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={props.isFriendly}
            onChange={props.handleChange5}
          />{" "}
          Is Friendly?
        </label>
        <label style={{ marginLeft: "7px" }}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange5}
          />{" "}
          male
        </label>
        <label style={{ marginLeft: "7px" }}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange5}
          />{" "}
          female
        </label>
        <br />
        <label>Favorite Color: </label>
        <select
          style={{ fontSize: "1rem" }}
          //type="checkbox"
          className="LL"
          name="favColor"
          color="color"
          value={props.favColor}
          onChange={props.handleChange5}
        >
          <option className=" " value="  ">
            Choose your color
          </option>
          <option className="blue" value="blue">
            blue
          </option>
          <option className="green" value="green">
            green
          </option>
          <option className="red" value="red">
            red
          </option>
          <option className="orange" value="orange">
            orange
          </option>
          <option className="yellow" value="yellow">
            yellow
          </option>
        </select>
        <br />
        <p style={styling}>
          {" "}
          {fullName + " "}Your friendlyness is determine by{" "}
        </p>
        <p style={styling}>The info filled says that you're {props.gender}</p>
        <h5 onChange={props.handleChange} style={styling}>
          My favorite color is {props.favColor} and here comes few details about
          me
          {" " + props.moreInfo}
        </h5>
        <button
          className="btn btn-secondary"
          onClick={props.handleSubmit}
          onChange={props.handleChange5}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlComponent;
