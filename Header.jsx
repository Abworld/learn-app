import React from "react";
import $ from "jquery";
import Popper from "popper.js";

//function Header() {

class Header extends React.Component {
  constructor() {
    super();
    this.state = { answer: "Yes", name: "Abass", Age: 28 };
  }
  render() {
    console.log(this.props);

    const client = <li>Client</li>;
    const iReport = <li>iReport</li>;
    const Name = "Abass Olayiwola";
    const location = "2, Olapeju Est, Mowe";
    const date = new Date();
    const hours = date.getHours();
    const styles = { fontSize: "inherit", padding: "8px" };
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morning";
      styles.color = "blue";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afteroon";
      styles.color = "green";
    } else {
      timeOfDay = "night";
      styles.color = "grey";
    }
    return (
      <div>
        <header className="navbar" id="navB">
          <ul className="navlist">
            <li>Home</li>
            <li>Serivice</li>
            {client}
            {iReport}
            <li>Contact</li>
          </ul>
        </header>
        <p
          style={{
            color: "white",
            fontStyle: "italic",
            textAlign: "center",
            backgroundColor: "teal",
            transition: "3s",
          }}
        >
          I'm {Name} staying at {location}
        </p>
        <a
          href="http://twitter.com/abworld"
          target="_blank"
          rel="noopener noreferrer"
          className="href-text"
          style={styles}
        >
          Kindly view my website this {timeOfDay} and let me know if {location}{" "}
          is okay too: while video is at irrespective
        </a>
        <input type="time" name="" id="" style={{ caretColor: "gold" }} />{" "}
        <div className="headerList" style={styles}>
          <p>
            My area is {location} {this.props.documentary.intro}{" "}
          </p>
          <p>
            aim: {this.props.documentary.location}
            {this.state.answer}{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
