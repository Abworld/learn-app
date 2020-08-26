import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
//import reactDOM from "react-dom";
//import logo from "./sample.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Footer() {
  return (
    <div>
      <footer>
        <span
          style={{
            textAlign: "center",
            fontStyle: "italic",
            fontSize: "small",
            color: "gray",
          }}
        >
          Here comes my footer: I'm 1:49mins mins video playback
        </span>
      </footer>
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardText>
                  <span style={{ fontSize: "large", fontWeight: "bolder" }}>
                    Politics News
                  </span>
                  <MDBCardImage
                    className="img-fluid"
                    src={require("./sample6.jpg")}
                    alt="logo"
                  />
                  <span
                    className="img-topic"
                    style={{
                      verticalAlign: "baseline",
                      textAlign: "left",
                      color: "grey",
                      fontWeight: "100",
                      fontSize: "small",
                    }}
                  >
                    Budillion shopping mall
                  </span>
                </MDBCardText>
                <MDBCardBody className="text">
                  <MDBCardTitle>
                    <div>
                      <a className="card-text" href="#">
                        Valour of Masterpiece{" "}
                      </a>{" "}
                      <br />
                      <a className="card-text" href="#">
                        Valour of Masterpiece{" "}
                      </a>{" "}
                      <br />
                      <a className="card-text" href="#">
                        Valour of Masterpiece{" "}
                      </a>
                    </div>
                    <button href="#" className="btn btn-warning">
                      MORE INFO
                    </button>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardText>
                  <span style={{ fontSize: "large", fontWeight: "bolder" }}>
                    Entertainment
                  </span>
                  <MDBCardImage
                    className="img-fluid"
                    src={require("./sample6.jpg")}
                    alt="logo"
                  />
                  <span
                    className="img-topic"
                    style={{
                      verticalAlign: "baseline",
                      //textAlign: "left",
                      color: "#ccc",
                      fontWeight: "200",
                      fontSize: "small",
                    }}
                  >
                    Budillion
                  </span>
                </MDBCardText>
                <MDBCardBody className="text">
                  <MDBCardTitle>
                    <div>
                      <a className="card-text">
                        Suspision in Aso rock as <em> medical director</em>{" "}
                        tested positive{" "}
                      </a>
                    </div>
                    <button href="#" className="btn btn-primary">
                      <MDBIcon
                        icon="heart"
                        className="ml-2"
                        style={{ color: "pink" }}
                      />
                      MORE INFO
                    </button>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardText>
                  <span style={{ fontSize: "large", fontWeight: "bolder" }}>
                    General
                  </span>
                  <MDBCardImage
                    className="img-fluid"
                    id="cardImage"
                    src={require("./img/sample3.jpg")}
                    alt="logo"
                  />
                  <span
                    className="img-topic"
                    style={{ color: "#ccc", fontSize: "small" }}
                  >
                    Budillion parrot
                  </span>
                  <span className="photo-credit"> img:iReportingNG</span>
                </MDBCardText>
                <MDBCardBody className="text">
                  <MDBCardTitle>
                    <div>
                      <a className="card-text" href="#">
                        Valour of Masterpiece{" "}
                      </a>
                    </div>
                    <button href="#" className="btn btn-danger">
                      MORE INFO
                    </button>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <hr className="my-4"></hr>
    </div>
  );
}

export default Footer;
