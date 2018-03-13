import React from "react";
import "./css/bootstrap.min.css";
import "./Assets/css/style.min.css";

export class Counter extends React.Component {
  render() {
    return (
      <div className="clickdisplay">
        You have clicked {this.props.clicks} times!
      </div>
    );
  }
}
