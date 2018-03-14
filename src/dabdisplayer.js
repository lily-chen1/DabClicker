import React from "react";
import { BuyButton } from "./buybutton.js";

export class DabDisplayer extends React.Component {
  render() {
    let targets = [];
    for (let index = 0; index < this.props.numberOfDabbers; index++) {
      targets.push(<img src={require("./Icons/stand.png")} alt="dab stand" />);
    }
    function isOverflown(element) {
      return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
      );
    }
    if (isOverflown(DabDisplayer)) {
      alert("nice");
    }

    return (
      <div
        className="float-left"
        id="carddisplay"
        onOverflow={this.props.onOverflow}
      >
        <div
          className="card mb-3 otherbuybutton"
          id="card"
          onOverflow={this.props.onOverflow}
        >
          <div
            id="dabdisplayer"
            className="buybutton rounded card-header"
            onOverflow={this.props.onOverflow}
          >
            {targets}
          </div>
          <div className="card-body">
            <h5 className="card-title d-inline">Dab Stand</h5>
            <img
              id="standimg"
              src={require("./Icons/stand.png")}
              alt="dab stand"
              className="d-inline"
            />
            <h5 className="card-title d-inline">Cost: 10 dabs</h5>
            <p className="card-text">
              A nice place to sell some freshly squeezed dabs.
            </p>
            <BuyButton onClick={this.props.onClick} />
          </div>
        </div>
      </div>
    );
  }
}
