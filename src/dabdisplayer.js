/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";
import anime from "animejs";
import { BuyButton } from "./buybutton";
import {
  DabDisplayerImg,
  FarmDisplayerImg,
  FactoryDisplayerImg,
  OilRigDisplayerImg,
  TimeMachineDisplayerImg,
  BlackHoleDisplayerImg
} from "./dabdisplayerimg";

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

export class DabDisplayer extends React.Component {
  // componentDidUpdate() {
  //   const element = this.element;
  //   const hasOverflowingChildren =
  //     element.offsetHeight < element.scrollHeight ||
  //     element.offsetWidth < element.scrollWidth;
  //   const cardDisplay = document.querySelector("#cardDisplay");
  //   const cardDisplayStyle = getComputedStyle(cardDisplay);
  //   const cardDisplayHeight = cardDisplayStyle.getPropertyValue("--img-height");
  //   const cardDisplayMargins = cardDisplayStyle.getPropertyValue("--img-margins");
  //   let temp = cardDisplayHeight;
  //   let bemp = cardDisplayMargins;
  //   temp *= 0.8;
  //   bemp *= 0.8;
  //   // cardDisplay.style.setProperty("--img-height", 200);
  //   if (hasOverflowingChildren) {
  //     cardDisplay.style.setProperty("--img-height", temp);
  //     cardDisplay.style.setProperty("--img-margins", bemp);
  //   }
  // }

  animationStart() {
    spin(ReactDOM.findDOMNode(this));
    currentAnimation.restart();
  }

  render() {
    const targets = [];
    for (let index = 0; index < this.props.numberOfDabbers; index++) {
      targets.push(<DabDisplayerImg key={index} />);
    }

    return (
      <div className="float-left" id="cardDisplay">
        <div className="card mb-3 otherBuyButton" id="card">
          <div
            id="dabDisplayer"
            className="buyButton rounded card-header"
            ref={(el) => {
              this.element = el;
            }}
          >
            {targets}
          </div>
          <div className="card-body">
            <h5 className="card-title d-inline">Dab Stand</h5>

            <img
              id="standImg"
              src={require("./Icons/stand2.svg")}
              alt="dab stand"
              className="d-inline"
            />

            <h5 className="card-title d-inline">Cost: 50 dabs</h5>
            <p className="card-text">
              A nice place to sell some freshly squeezed dabs.<br />
              <i>Adds 0.25 dabs per second.</i>
            </p>
            <BuyButton
              Buy={this.props.Buy}
              Sell={this.props.Sell}
              x={1}
              x10={10}
              x100={100}
              animationStart={this.animationStart}
              key="key1"
            />
          </div>
        </div>
      </div>
    );
  }
}

export class FarmDisplayer extends React.Component {
  // componentDidUpdate() {
  //   const element = this.element;
  //   const hasOverflowingChildren =
  //     element.offsetHeight < element.scrollHeight ||
  //     element.offsetWidth < element.scrollWidth;
  //   const cardDisplay = document.querySelector("#cardDisplay");
  //   const cardDisplayStyle = getComputedStyle(cardDisplay);
  //   const cardDisplayHeight = cardDisplayStyle.getPropertyValue("--img-height-farm");
  //   const cardDisplayMargins = cardDisplayStyle.getPropertyValue("--img-margins-farm");
  //   let temp = cardDisplayHeight;
  //   let bemp = cardDisplayMargins;
  //   temp *= 0.8;
  //   bemp *= 0.8;
  //   cardDisplay.style.setProperty("--img-height-farm", 200);
  //   if (hasOverflowingChildren) {
  //     cardDisplay.style.setProperty("--img-height-farm", temp);
  //     cardDisplay.style.setProperty("--img-margins-farm", bemp);
  //   }
  // }

  animationStart() {
    spin(ReactDOM.findDOMNode(this));
    currentAnimation.restart();
  }

  render() {
    const targets = [];
    for (let index = 0; index < this.props.numberOfDabbers; index++) {
      targets.push(<FarmDisplayerImg key={index} />);
    }
    const farmBorder = {
      borderColor: "#4CAF50"
    };

    return (
      <div className="float-left" id="cardDisplay">
        <div className="card mb-3" id="card" style={farmBorder}>
          <div id="background">
            <div
              id="dabDisplayer"
              className="rounded card-header"
              style={farmBorder}
              ref={(el) => {
                this.element = el;
              }}
            >
              {targets}
            </div>
            <div className="card-body">
              <h5 className="card-title d-inline">Dab Farm</h5>

              <img
                id="standImg"
                src={require("./Icons/Farm.svg")}
                alt="dab stand"
                className="d-inline"
              />

              <h5 className="card-title d-inline">Cost: 250 dabs</h5>
              <p className="card-text">
                Fresh, organic dabs grown with environmentally friendly
                sustainable agriculture. <br /> <i>Adds 2 dabs per second.</i>
              </p>
              <BuyButton
                borderColor="#4CAF50"
                Buy={this.props.Buy}
                Sell={this.props.Sell}
                x={1}
                x10={10}
                x100={100}
                animationStart={this.animationStart}
                key="key2"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class FactoryDisplayer extends React.Component {
  animationStart() {
    spin(ReactDOM.findDOMNode(this));
    currentAnimation.restart();
  }

  render() {
    const targets = [];
    for (let index = 0; index < this.props.numberOfDabbers; index++) {
      targets.push(<FactoryDisplayerImg key={index} />);
    }
    const farmBorder = {
      borderColor: "#607D8B"
    };

    return (
      <div className="float-left" id="cardDisplay">
        <div className="card mb-3" id="card" style={farmBorder}>
          <div id="background">
            <div
              id="dabDisplayer"
              className="rounded card-header"
              style={farmBorder}
              ref={(el) => {
                this.element = el;
              }}
            >
              {targets}
            </div>
            <div className="card-body">
              <h5 className="card-title d-inline">Dab Factory</h5>

              <img
                id="standImg"
                src={require("./Icons/Factory.svg")}
                alt="dab stand"
                className="d-inline"
              />

              <h5 className="card-title d-inline">Cost: 1,000 dabs</h5>
              <p className="card-text">
                Newly made dabs roll off the assembly lines.<br />
                <i>Adds 14 dabs per second.</i>
              </p>
              <BuyButton
                borderColor="#607D8B"
                Buy={this.props.Buy}
                Sell={this.props.Sell}
                x={1}
                x10={10}
                x100={100}
                animationStart={this.animationStart}
                key="key3"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class OilRigDisplayer extends React.Component {
  animationStart() {
    spin(ReactDOM.findDOMNode(this));
    currentAnimation.restart();
  }

  render() {
    const targets = [];
    for (let index = 0; index < this.props.numberOfDabbers; index++) {
      targets.push(<OilRigDisplayerImg key={index} />);
    }
    const farmBorder = {
      borderColor: "#FF5722"
    };

    return (
      <div className="float-left" id="cardDisplay">
        <div className="card mb-3" id="card" style={farmBorder}>
          <div id="background">
            <div
              id="dabDisplayer"
              className="rounded card-header"
              style={farmBorder}
              ref={(el) => {
                this.element = el;
              }}
            >
              {targets}
            </div>
            <div className="card-body">
              <h5 className="card-title d-inline">Dab Oil Rig</h5>

              <img
                id="standImg"
                src={require("./Icons/Oil Rig.svg")}
                alt="dab stand"
                className="d-inline"
              />

              <h5 className="card-title d-inline">Cost: 5,000 dabs</h5>
              <p className="card-text">
                Harness the power of prehistoric liquidized dabs from eons ago.{" "}
                <br />
                <i>Adds 86 dabs per second.</i>
              </p>
              <BuyButton
                borderColor="#FF5722"
                Buy={this.props.Buy}
                Sell={this.props.Sell}
                x={1}
                x10={10}
                x100={100}
                animationStart={this.animationStart}
                key="key4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class TimeMachineDisplayer extends React.Component {
  animationStart() {
    spin(ReactDOM.findDOMNode(this));
    currentAnimation.restart();
  }

  render() {
    const targets = [];
    for (let index = 0; index < this.props.numberOfDabbers; index++) {
      targets.push(<TimeMachineDisplayerImg key={index} />);
    }
    const farmBorder = {
      borderColor: "#03A9F4"
    };

    return (
      <div className="float-left" id="cardDisplay">
        <div className="card mb-3" id="card" style={farmBorder}>
          <div id="background">
            <div
              id="dabDisplayer"
              className="rounded card-header"
              style={farmBorder}
              ref={(el) => {
                this.element = el;
              }}
            >
              {targets}
            </div>
            <div className="card-body">
              <h5 className="card-title d-inline">Dab Time Machine</h5>

              <img
                id="standImg"
                src={require("./Icons/Time Machine.svg")}
                alt="dab stand"
                className="d-inline"
              />

              <h5 className="card-title d-inline">Cost: 100,000 dabs</h5>
              <p className="card-text">
                Travel back to a time when dabs were more plentiful.<br />
                <i>Adds 2,688 dabs per second.</i>
              </p>
              <BuyButton
                borderColor="#03A9F4"
                Buy={this.props.Buy}
                Sell={this.props.Sell}
                x={1}
                x10={10}
                x100={100}
                animationStart={this.animationStart}
                key="key5"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class BlackHoleDisplayer extends React.Component {
  animationStart() {
    spin(ReactDOM.findDOMNode(this));
    currentAnimation.restart();
  }

  render() {
    const targets = [];
    for (let index = 0; index < this.props.numberOfDabbers; index++) {
      targets.push(<BlackHoleDisplayerImg key={index} />);
    }
    const farmBorder = {
      borderColor: "#212121"
    };

    return (
      <div className="float-left" id="cardDisplay">
        <div className="card mb-3" id="card" style={farmBorder}>
          <div id="background">
            <div
              id="dabDisplayer"
              className="rounded card-header"
              style={farmBorder}
              ref={(el) => {
                this.element = el;
              }}
            >
              {targets}
            </div>
            <div className="card-body">
              <h5 className="card-title d-inline">Dab Black Hole</h5>

              <img
                id="standImg"
                src={require("./Icons/Blackhole.svg")}
                alt="dab stand"
                className="d-inline"
              />

              <h5 className="card-title d-inline">Cost: 10,000,000 dabs</h5>
              <p className="card-text">
                Your technological superiority is exemplified by your ability to
                create gravitational singularities from the ferocious energy of
                your dabs. You become the god of dabs. <br />
                <i>
                  Adds 420<sup>69</sup> dabs per second.
                </i>
              </p>
              <BuyButton
                borderColor="#212121"
                Buy={this.props.Buy}
                Sell={this.props.Sell}
                x={1}
                x10={10}
                x100={100}
                animationStart={this.animationStart}
                key="key6"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
