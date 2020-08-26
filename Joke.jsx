import React from "react";

function Joke(props) {
  console.log(props);
  //const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //const doubleNumber = nums.map(function (num) {
  // return num * 2;
  // });

  //console.log(doubleNumber);

  return (
    <div
      className="Qtem"
      style={{ fontWeight: "400", padding: "1rem", backgroundColor: "white" }}
    >
      <img
        src={props.QandAns.imgSrc}
        //alt="Questioniare"
        //srcset={props.QandAns.imgSrc}
        style={{ width: "300", height: 220 }}
      />
      <h3>Question: {props.QandAns.Question} </h3>
      <h3 style={{ color: !props.QandAns.Answer && "crimson" }}>
        Answer: {props.QandAns.Answer}
      </h3>
      <button className="btn btn-danger">More!!</button> {props.QandAns.btn}
      <hr />
    </div>
  );
}
export default Joke;
//style={{ display: !props.QandAns.Answer "blocked" && "none" }}> same as line 36
//style={{ color: !props.QandAns.Answer && "crimson" }} change color
