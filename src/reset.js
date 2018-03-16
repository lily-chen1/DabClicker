import React from "react";

export class Reset extends React.Component {
  render() {
    return (
      <div id="resetbutton">
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
