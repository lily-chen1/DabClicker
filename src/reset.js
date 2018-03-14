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
      </div>
    );
  }
}
