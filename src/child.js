import React from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import anime from "animejs";

export class Child extends React.Component {
  render() {
    return (
      <div className="dabButton">
        <button
          className="btn btn-outline-success"
          onClick={this.props.onClick}
        >
          dab
        </button>
      </div>
    );
  }
}
