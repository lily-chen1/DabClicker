import React from "react";

export class Counter extends React.Component {
  render() {
    return (
      <div>
        <div id="clickdisplay">You have dabbed {this.props.clicks} times</div>
        <div id="perseconddisplay">
          {this.props.dabsPerSecond} dabs per second
        </div>
      </div>
    );
  }
}
