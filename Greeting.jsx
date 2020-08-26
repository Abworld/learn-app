import React from "react";

class Greeting extends React.Component {
  render() {
    // highlight properties
    const date = new Date();
    const hours = date.getHours();
    const location = "19, Folawiyo street, Ikate";
    const styles = { fontWeight: "100", padding: "1rem" };
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morning";
      styles.color = "blue";
      styles.backgroundColor = "Yellow";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afteroon";
      styles.color = "green";
      styles.backgroundColor = "#ccc";
    } else {
      timeOfDay = "night";
      styles.color = "teal";
      styles.backgroundColor = "whitesmoke";
    }

    return (
      <div>
        <h6 style={styles}>
          {" "}
          I miss you so much on {timeOfDay} as we couldnt hangs with you for
          that long due to how distance is {location} to here , at 2:57mins.
        </h6>
      </div>
    );
  }
}
export default Greeting;
