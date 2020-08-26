import React from "react";

import HeaderComponenent from "./HeaderComponent";
class MemeGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      buttomText: "",
      randomImage: "https://i.imgflip.com/1bij.jpg",
      //value: "",
      name: "",
      backData: [],
    };
    /*this.handleChange = this.handleChange.bind(this); 
    because am using new handle concept ;handleChange = (event) => {  my handle */
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleChage1 = this.handleChage1.bind(this);
    //this.handleChage2 = this.handleChage2.bind(this);
  }
  /*
  Create a method that, when the "Gen" button is clicked, chooses one of the
  memes from our "backdata" array at random and makes it so that is the
  memes images that will show up at buttom of portion of our generator site('.url)
  */
  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.backData.length);
    const randMemeImg = this.state.backData[randNum].url;
    this.setState({ randomImage: randMemeImg });

    console.log(
      " Data initialized are:  topText - " +
        this.state.topText +
        " while buttomText stated : " +
        this.state.buttomText +
        "end"
    );
    //event.preventDefault();
  }
  handleChange = (event) => {
    // new handle method instead of handleChange(event){
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  /*
  handleChage1(event) {
    const { buttomText, value } = event.target;
    this.setState({ [buttomText]: value });
  } */
  UNSAFE_componentWillMount() {
    //this.setState({ topText: "" });
    fetch("https://api.imgflip.com/get_memes ") //"https://api.imgflip.com/get_memes"
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);

        this.setState({ backData: memes });
      });
  }
  render() {
    return (
      <HeaderComponenent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    );
  }
}
export default MemeGenerator;
