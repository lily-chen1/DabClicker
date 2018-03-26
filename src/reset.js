import React from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import anime from "animejs";

export class Reset extends React.Component {
  render() {
    return (
      <div id="resetButton">
        <button
          className="btn btn-outline-success"
          onClick={this.props.onClick}
        >
          anim test
        </button>
        <button
          className="btn btn-outline-success"
          onClick={this.props.onClick}
        >
          reset
        </button>
        <button
          className="btn btn-outline-success"
          onClick={this.props.onClick2}
        >
          test
        </button>
        <button
          className="btn btn-outline-success"
          onClick={this.props.onClick3}
        >
          test2
        </button>
      </div>
    );
  }
}
