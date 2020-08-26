import React from "react";
import ControlComponent from "./ControlComponent";
//import { useState, useEffect } from "react";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
      firstName: " ",
      lastName: " ",
      isFriendly: false,
      gender: "",
      favColor: "  ",
      //optionColor: " ",
      moreInfo: "",
    };
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange6.bind(this);
    this.handleChange8 = this.handleChange8.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange4(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  handleChange8(event3) {
    const { color, value, type, checked } = event3.target;
    type === "checkbox"
      ? this.setState({ [color]: checked })
      : this.setState({ [color]: value });
    this.state.favColor = this.state.optionColor;
    //this.setState({ value: event3.target.color });
  }
  handleChange6() {
    //this.setState({ value: option.target.value });
    //const { id, value } = getColor.target;
    this.setState((getColor) => {
      return {
        //this.setState({ [id]: value })
        option: !getColor.option,
      };
    });
  }

  handleChange5(event1) {
    const { name, value, type, checked } = event1.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
          //[type]: checked,
          //another way of writing...
          //[event1.target.name]: event1.target.value, --while const is removed
        });
    // +this.setState({ [id]: value });
  }

  handleSubmit(event) {
    const fullName = this.state.firstName + this.state.lastName;
    console.log(
      " Be informed we are having your information " +
        "Your name " +
        fullName +
        ", " +
        this.state.gender +
        " and question about if am friendly is  " +
        this.state.isFriendly +
        " with - " +
        this.state.favColor +
        " as your favorite color and highlighted few details: " +
        this.state.moreInfo
    );
    event.preventDefault();
  }
  /* textarea has a self closing tag in React
   * <input type="checkbox"/> is either checked or none. so ?=== is used <label/> inserted
   * <input type="radio"/> .. works o checkbox provision// allows label
   * <select> and <option> elements
   * Formix site render form API and tutorial*/
  render() {
    //const styling = { fontSize: "1.20rem" };
    return (
      //

      <ControlComponent
        handleChange5={this.handleChange5}
        handleChange4={this.handleChange4}
        handleChange7={this.handleChange7}
        handleSubmit={this.handleSubmit}
        handleChange8={this.handleChange8}
        {...this.state}
      />
    );
  }
}
export default FormContainer;
