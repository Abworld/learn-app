import React from "react";
//import Sample from "./sample.jpg";
//import src from "*.bmp";

function ContactCard(props) {
  console.log(props);
  return (
    <div className="contact-card" style={{ padding: "1rem" }}>
      <img
        src={props.Contact.imgSrc}
        alt="sample"
        style={{ width: 300, height: 250 }}
      />
      <h3> {props.Contact.name} </h3>
      <p> {props.Contact.phone} </p>
      <p> {props.Contact.email} </p>
      <p> {props.Contact.location} </p>
    </div>
  );
}

export default ContactCard;
