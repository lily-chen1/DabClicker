import React from "react";

export class Tier1Buy extends React.Component {
  render() {
    return (
      <div id="clickbutton">
        <button
          className="btn btn-outline-success"
          onClick={this.props.onClick}
        >
          buy a dabber (5 dabs)
        </button>
      </div>
    );
  }
}
