import React from "react";

export class BuyButton extends React.Component {
  render() {
    return (
      <div id="clickbutton">
        <button
          className="btn btn-outline-warning buybutton"
          onClick={this.props.onClick}
        >
          Buy
        </button>
      </div>
    );
  }
}
