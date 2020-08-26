import React from "react";
//import { MDBCard } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
//import Button from "react-Bootstrap/Button";
import "bootstrap/dist/js/bootstrap.bundle.min";
import State from "./State";

class Testing extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  //
  render() {
    return (
      <div className="card" style={{ backgroundColor: "lightcyan" }}>
        <div className="info-card" id="biodata" style={{ fontWeight: "500" }}>
          <span>DOB: {this.props.biodatainfo.dob} </span>
          <p> Name: {this.props.biodatainfo.fullName} </p>
          <p> Profession: {this.props.biodatainfo.job} </p>
          <p> marrital Status: {this.props.biodatainfo.marritalStatus} </p>
          <a style={{ color: "black" }}>
            {this.props.biodatainfo.readMore}
            <button href="" className="btn btn-warning" block="">
              {this.props.biodatainfo.click}{" "}
            </button>
          </a>
        </div>
      </div>
    );
  }
}

//function Testing(props) {
//console.log(props);

export default Testing;
