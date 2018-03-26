/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import anime from "animejs";

let dabClickAnimation;

const clearDabClickAnimation = () => {
  if (dabClickAnimation) dabClickAnimation.pause();
};

const dabClick = () => {
  clearDabClickAnimation();
  dabClickAnimation = anime
    .timeline()
    .add({
      targets: "#dabVisual img",
      scale: {
        value: 1.2,
        duration: 40,
        easing: "easeInOutQuart"
      }
    })
    .add({
      targets: "#dabVisual img",
      scale: {
        value: 1,
        delay: 40,
        duration: 40,
        easing: "easeInOutQuart"
      }
    });
};
export class DabVisual extends React.Component {
  animationStart() {
    dabClick(ReactDOM.findDOMNode(this));
    dabClickAnimation.restart();
  }

  render() {
    return (
      <div
        id="dabVisual"
        onClick={(event) => {
          {
            this.props.onClick(1);
          }
          {
            this.animationStart();
          }
        }}
      >
        <img src={require("./Icons/dab.svg")} alt="dab" />
      </div>
    );
  }
}
