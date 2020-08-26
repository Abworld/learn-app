import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import { Button } from "reactstrap";

function MyInfo() {
  return (
    <div>
      <h1 className="text">Name: Abass Olayiwola</h1>
      <p>
        Am new on react, am trying <em>hard</em> to learn as much as i can
      </p>
      <ul style={{ listStyleType: "none" }}>
        First Resort
        <li>Bar Beach</li>
        <li>Badagry Beach</li>
      </ul>
      <ul>
        Eatery Resort
        <li>Banana Republic</li>
        <li>Chicken Republic</li>
      </ul>
      <input
        className="form-group"
        placeholder="City"
        text="true"
        datatype="text"
      />
      ,
      <input className="form-group" datatype="text" placeholder="enter name" />
      <input type="checkbox" />{" "}
      <a placeholder="click result">placeholder text here</a>
      <button className="btn btn-success btn lg">Result</button>
    </div>
  );
}
export default MyInfo;
