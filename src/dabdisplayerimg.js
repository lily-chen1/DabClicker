/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";
import anime from "animejs";

export class DabDisplayerImg extends React.Component {
  componentDidMount() {
    anime({
      targets: "#imgCounter",
      scale: {
        value: 9,
        duration: 800,
        delay: 100,
        easing: "easeOutQuart"
      }
    });
  }
  render() {
    return (
      <img
        src={require("./Icons/stand2.svg")}
        alt="dab stand"
        id="imgCounter"
      />
    );
  }
}

export class FarmDisplayerImg extends React.Component {
  componentDidMount() {
    anime({
      targets: "#imgCounterFarm",
      scale: {
        value: 9,
        duration: 800,
        delay: 100,
        easing: "easeOutQuart"
      }
    });
  }
  render() {
    return (
      <img
        src={require("./Icons/Farm.svg")}
        alt="dab farm"
        id="imgCounterFarm"
      />
    );
  }
}

export class FactoryDisplayerImg extends React.Component {
  componentDidMount() {
    anime({
      targets: "#imgCounter",
      scale: {
        value: 9,
        duration: 800,
        delay: 100,
        easing: "easeOutQuart"
      }
    });
  }
  render() {
    return (
      <img
        src={require("./Icons/Factory.svg")}
        alt="dab factory"
        id="imgCounter"
      />
    );
  }
}

export class OilRigDisplayerImg extends React.Component {
  componentDidMount() {
    anime({
      targets: "#imgCounter",
      scale: {
        value: 9,
        duration: 800,
        delay: 100,
        easing: "easeOutQuart"
      }
    });
  }
  render() {
    return (
      <img
        src={require("./Icons/Oil Rig.svg")}
        alt="dab factory"
        id="imgCounter"
      />
    );
  }
}

export class TimeMachineDisplayerImg extends React.Component {
  componentDidMount() {
    anime({
      targets: "#imgCounter",
      scale: {
        value: 9,
        duration: 800,
        delay: 100,
        easing: "easeOutQuart"
      }
    });
  }
  render() {
    return (
      <img
        src={require("./Icons/Time Machine.svg")}
        alt="dab factory"
        id="imgCounter"
      />
    );
  }
}

export class BlackHoleDisplayerImg extends React.Component {
  componentDidMount() {
    anime({
      targets: "#imgCounter",
      scale: {
        value: 9,
        duration: 800,
        delay: 100,
        easing: "easeOutQuart"
      }
    });
  }
  render() {
    return (
      <img
        src={require("./Icons/Blackhole.svg")}
        alt="dab factory"
        id="imgCounter"
      />
    );
  }
}
