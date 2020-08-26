import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./App.css"; //Import here your file style

const GridExamplesPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" className="col-md4">
          .col-md-4
        </MDBCol>
        <MDBCol md="4" className="col-md4">
          .col-md-4
        </MDBCol>
        <MDBCol md="4" className="col-md4">
          .col-md-4
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default GridExamplesPage;
