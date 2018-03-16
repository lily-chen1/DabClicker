/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";
import "./Assets/css/style.min.css";
import "./bootstrap/css/bootstrap.min.css";
import { Child } from "./child";
import { Counter } from "./counter";
import { Reset } from "./reset";
import { DabDisplayer } from "./dabdisplayer";
import { DabVisual } from "./dabvisual";

class Nice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      dabsPerSecond: 0,
      numberOfDabbers: 0,
      noCost: false,
      // to keep a reference to all the intervals
      intervals: {},

      // create another interval
      make(fun, delay) {
        // see explanation after the code
        const newInterval = setInterval.apply(
          window,
          [fun, delay].concat([].slice.call(arguments, 2))
        );

        this.intervals[newInterval] = true;

        return newInterval;
      },

      // clear a single interval
      clear(id) {
        return clearInterval(this.intervals[id]);
      },

      // clear all intervals
      clearAll() {
        const all = Object.keys(this.intervals);
        let len = all.length;

        while (len-- > 0) {
          clearInterval(all.shift());
        }
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.tier1buy = this.tier1buy.bind(this);
    this.cheat = this.cheat.bind(this);
    this.removeCost = this.removeCost.bind(this);
  }
  cheat() {
    this.setState({ clicks: 9999999999999999999999999999999999999999 });
  }
  removeCost() {
    this.setState({ noCost: true });
  }
  handleClick() {
    let temp = this.state.clicks;
    temp++;
    this.setState({ clicks: temp });
  }

  tier1buy() {
    function isOverflown(element) {
      return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
      );
    }
    if (isOverflown(DabDisplayer)) {
      alert("nice");
    }
    // alert(isOverflown(DabDisplayer));
    if (this.state.clicks >= 10 || this.state.noCost) {
      let femp = this.state.clicks;
      femp -= 10;
      let hemp = this.state.dabsPerSecond;
      hemp += 0.25;
      let gemp = this.state.numberOfDabbers;
      gemp += 1;
      if (!this.state.noCost) {
        this.setState({ clicks: femp });
      }
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfDabbers: gemp });
      this.autoDab = this.state.make(() => this.handleClick(), 4000);
      // this.state.make(0, 0);
      // this.autoDab = setInterval(() => this.handleClick(), 4000);
    }
  }
  reset() {
    this.setState({ clicks: 0 });
    // for (let index = 0; index < this.state.numberOfDabbers; index++) {
    // clearInterval(this.autoDab);
    // this.autoDab.window.clearInterval(index);
    // }
    this.state.clearAll();
  }

  handleOverflow() {
    alert("nice");
  }

  render() {
    return (
      <div id="bodygrid">
        {/* <Title /> */}
        <div className="verticalline" />
        <div id="displaycontainer">
          <DabDisplayer
            numberOfDabbers={this.state.numberOfDabbers}
            onClick={this.tier1buy}
            onOverflow={this.handleOverflow}
          />
        </div>
        <Counter
          clicks={this.state.clicks}
          dabsPerSecond={this.state.dabsPerSecond}
        />
        <DabVisual />
        <div id="buttongrid">
          <Child onClick={this.handleClick} />
          <Reset
            onClick={this.reset}
            onClick2={this.cheat}
            onClick3={this.removeCost}
          />
        </div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(<Nice />, document.getElementById("root"));
