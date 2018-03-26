import React from "react";
import ReactDOM from "react-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import anime from "animejs";
import Radium from "radium";

let currentAnimation;

const clearCurrentAnimation = () => {
  if (currentAnimation) currentAnimation.pause();
};

const spin = () => {
  clearCurrentAnimation();
  currentAnimation = anime
    .timeline()
    .add({
      targets: "#standImg",
      scale: {
        value: 1.2,
        duration: 50,
        easing: "easeInOutQuart"
      }
    })
    .add({
      targets: "#standImg",
      scale: {
        value: 1,
        delay: 50,
        duration: 50,
        easing: "easeInOutQuart"
      }
    });
};
export class BuyButton extends React.Component {
  animationStart() {
    spin(ReactDOM.findDOMNode(this));
    currentAnimation.restart();
  }

  render() {
    const borderColor = {
      borderColor: this.props.borderColor,
      color: this.props.borderColor,
      ":hover": {
        backgroundColor: this.props.borderColor,
        color: "#212529"
      },
      ":focus": {
        boxShadow: "none"
      }
    };

    return (
      <div id="clickButton">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic example"
          style={{ marginLeft: "0%" }}
        >
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => {
              {
                this.props.Buy(this.props.x);
              }
              {
                this.animationStart();
              }
            }}
            style={borderColor}
            key="key1"
          >
            Buy
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => this.props.Buy(this.props.x10)}
            style={borderColor}
            key="key2"
          >
            x 10
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => this.props.Buy(this.props.x100)}
            style={borderColor}
            key="key3"
          >
            x 100
          </button>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic example"
          style={{ marginLeft: "3%" }}
        >
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => this.props.Sell(this.props.x)}
            style={borderColor}
            key="key4"
          >
            Sell
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => this.props.Sell(this.props.x10)}
            style={borderColor}
            key="key5"
          >
            x 10
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => this.props.Sell(this.props.x100)}
            style={borderColor}
            key="key6"
          >
            x 100
          </button>
        </div>
      </div>
    );
  }
}

BuyButton = Radium(BuyButton);
