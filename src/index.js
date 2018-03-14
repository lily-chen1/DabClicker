import React from "react";
import ReactDOM from "react-dom";
import "./Assets/css/style.min.css";
import "./css/bootstrap.min.css";
import { Child } from "./child";
import { Counter } from "./counter";
import { Reset } from "./reset";
import { Tier1Buy } from "./tier1buy";
import { DabDisplayer } from "./dabdisplayer";

class Nice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      targets: {},
      dabsPerSecond: 0,
      numberOfDabbers: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.tier1buy = this.tier1buy.bind(this);
  }
  handleClick(e) {
    var temp = this.state.clicks;
    temp++;
    this.setState({ clicks: temp });
  }
  reset(e) {
    this.setState({ clicks: 0 });
  }
  tier1buy() {
    if (this.state.clicks >= 5) {
      var femp = this.state.clicks;
      femp -= 5;
      var hemp = this.state.dabsPerSecond;
      hemp += 0.25;
      var gemp = this.state.numberOfDabbers;
      gemp++;
      this.setState({ clicks: femp });
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfDabbers: gemp });
      setInterval(this.handleClick, 4000);
    }
  }

  render() {
    return (
      <div id>
        <DabDisplayer
          numberOfDabbers={this.state.numberOfDabbers}
          onClick={this.tier1buy}
        />
        <Counter
          clicks={this.state.clicks}
          dabsPerSecond={this.state.dabsPerSecond}
        />
        <hr />
        <div id="buttongrid">
          <Child onClick={this.handleClick} />
          <Reset onClick={this.reset} />
          <Tier1Buy onClick={this.tier1buy} />
        </div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(<Nice />, document.getElementById("root"));
