import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function MainContent() {
  return (
    <div>
      <hr />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <div className="title-text">
              {" "}
              <i
                className="fa fa-mobile"
                style={{ color: "crimson", fontSize: "2rem" }}
              ></i>{" "}
              mobile
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div
              className="title-text"
              style={{ color: "whitesmoke", fontSize: "large" }}
            >
              {" "}
              Mobile 2
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default MainContent;
