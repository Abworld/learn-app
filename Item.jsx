import React from "react";

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Abass Olayiwola",
      Age: "33",
    };
  }
  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <h6 style={{ color: "green" }}>wants: {this.props.product.name}</h6>
        <div>
          <p>
            #{this.props.product.price} {this.state.name}
            <span>
              {" "}
              {this.props.product.description}
              {this.state.Age}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

//console.log(this);

export default Item;
//style={{ display: !props.QandAns.Answer "blocked" && "none" }}>
