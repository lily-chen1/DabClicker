import React from "react";

export class Counter extends React.Component {
  render() {
    return (
      <div id="counter">
        <div id="clickDisplay">You have dabbed {this.props.clicks} times</div>
        <div id="perSecondDisplay">
          {this.props.dabsPerSecond} dabs per second
        </div>
      </div>
    );
  }
}
