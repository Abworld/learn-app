import React from "react";

function Goods(props) {
  console.log(props);

  return (
    <div className="chopping" style={{ padding: "1rem" }}>
      <p>statement: {props.goo.resquest}</p>
      <p>comment: {props.goo.reply} </p>
      <p
        style={{
          color: !props.payment && "blue",
          backgroundColor: "white",
          fontFamily: "cosmic, roboto, Sans",
        }}
      >
        recommendation: {props.goo.record}{" "}
      </p>
      <hr />
    </div>
  );
}
export default Goods;
