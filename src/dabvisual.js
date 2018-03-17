/* eslint-env browser */
import React from "react";

export class DabVisual extends React.Component {
  render() {
    return (
      <div id="dabVisual" onClick={this.props.onClick}>
        <img src={require("./Icons/dab.svg")} alt="dab" />
      </div>
    );
  }
}
