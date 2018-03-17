import React from "react";

export class BuyButton extends React.Component {
  render() {
    return (
      <div id="clickButton">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-outline-warning buyButton"
            onClick={this.props.Buy}
          >
            Buy
          </button>
          <button type="button" className="btn btn-outline-warning buyButton ">
            x 10
          </button>
          <button type="button" className="btn btn-outline-warning buyButton">
            x 100
          </button>
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-outline-warning buyButton"
            onClick={this.props.Buy}
          >
            Sell
          </button>
          <button type="button" className="btn btn-outline-warning buyButton ">
            x 10
          </button>
          <button type="button" className="btn btn-outline-warning buyButton">
            x 100
          </button>
        </div>
      </div>
    );
  }
}
