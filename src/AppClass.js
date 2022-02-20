import React, { Component } from "react";
import Img from "./image/dvp.jpg";

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "My Name Is : Bassem jazzar",
      profession: "I'am a Student in GOMYCODE",
      bio: " I Love Football",
      imageSrc: Img,
      show: false,
      count: 0,
    };
  }
  show = () => {
    this.setState({ show: !this.state.show });
  };
  // plus = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // moins = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };
  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000),
    });
  }
  render() {
    return (
      <div>
        <h1>Hello this is my profile</h1>
        {this.state.show && (
          <p>
            {this.state.fullName}
            <br /> {this.state.profession}
            <br /> {this.state.bio} <br />
            <img
              src={Img}
              className="myphoto"
              alt="Myphoto"
              style={{ width: "20%", height: "20%", borderRadius: "50%" }}
            />
          </p>
        )}
        <button onClick={this.show}>Show me</button>
        <p>{this.state.count}</p>
        {/* <button onClick={this.plus}>+</button>
        <button onClick={this.moins}>-</button> */}
      </div>
    );
  }
}
export default AppClass;