import React, { Component } from "react";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {};
    //this.handleChange = this.handleChange.bind(this);
    //component did mount is use if data of a class lkely source online

    // {
    //this.componentDidMount; //E.g -- getting data from API calls data site
    // get data to correctly display
    //{
    // this.componentWillReceiveProps(){
    //works when props is recieve from parent to children. message passed through the
    // parent down to child everytime componentDidMount was effected
    // static getDerivedStateFromProps(props, this.state);{
    // return the new updated base on the props.
    //this.getSnapshotBeforeUpdate(){
    // mostly use to create a backup for data

    //this.getSnapshotBeforeUpdate
    //next props is mostly used.
    //if (nextProps.whatever ! ==== previousProps) {
    // do something{
    // this.shouldComponentUpdate(nextProps, nextState)
    // return true if it support your motion to update
    //or false if not
    //this.UNSAFE_componentWillMount();
    // remove event listener ut mostly used to tear down or clean up b4 component dissappear
  }
  //

  render() {
    console.log(this.props);
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through",
    };

    return (
      <div>
        <div
          className="todo-item"
          style={{
            textAlign: "center",
            fontFamily: "Roboto, Sans-serif",
            padding: ("30px", "20px", "0px"),
            width: "70%",
            fontWeight: 100,
            fontSize: "15px",
            color: "#333333",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <br />
          <input
            type="checkbox"
            checked={this.props.doList.completed}
            onChange={() => this.props.handleChange(this.props.doList.idMe)}
          />
          <p style={this.props.doList.completed ? completedStyle : null}>
            {" "}
            {this.props.doList.text}
          </p>
        </div>
      </div>
    );
  }
}

export default TodoItem;
