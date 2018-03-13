import React from "react";
import "./css/bootstrap.min.css";
import "./Assets/css/style.min.css";

export class Child extends React.Component {
  render() {
    return (
      <div className="clickbutton">
        <button
          className="btn btn-outline-success"
          onClick={this.props.onClick}
        >
          click here
        </button>
      </div>
    );
  }
}
