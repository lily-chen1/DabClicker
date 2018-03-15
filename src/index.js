/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";
import "./Assets/css/style.min.css";
import "./css/bootstrap.min.css";
import { Child } from "./child";
import { Counter } from "./counter";
import { Reset } from "./reset";
import { DabDisplayer } from "./dabdisplayer";

class Nice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      dabsPerSecond: 0,
      numberOfDabbers: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.tier1buy = this.tier1buy.bind(this);
    this.cheat = this.cheat.bind(this);
  }
  cheat() {
    this.setState({ clicks: 9999999999999999999999999999999999999999 });
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
    if (this.state.clicks >= 10) {
      let femp = this.state.clicks;
      femp -= 10;
      let hemp = this.state.dabsPerSecond;
      hemp += 0.25;
      let gemp = this.state.numberOfDabbers;
      gemp += 1;
      this.setState({ clicks: femp });
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfDabbers: gemp });
      this.autoDab = setInterval(() => this.handleClick(), 4000);
    }
  }
  reset() {
    this.setState({ clicks: 0 });
    for (let index = 0; index < this.state.numberOfDabbers; index++) {
      // clearInterval(this.autoDab);
      this.autoDab.window.clearInterval(index);
    }
    const interval = {
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
  }

  handleOverflow() {
    alert("nice");
  }

  render() {
    return (
      <div id="bodygrid">
        <DabDisplayer
          numberOfDabbers={this.state.numberOfDabbers}
          onClick={this.tier1buy}
          onOverflow={this.handleOverflow}
        />
        <Counter
          clicks={this.state.clicks}
          dabsPerSecond={this.state.dabsPerSecond}
        />
        <hr />
        <div id="buttongrid">
          <Child onClick={this.handleClick} />
          <Reset onClick={this.reset} onClick2={this.cheat} />
        </div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(<Nice />, document.getElementById("root"));
