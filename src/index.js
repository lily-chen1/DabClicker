/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import anime from "animejs";
import Radium from "radium";
import "./Assets/css/style.min.css";
import "./bootstrap/css/bootstrap.min.css";
import { Child } from "./child";
import { Counter } from "./counter";
import { Reset } from "./reset";
import {
  DabDisplayer,
  FarmDisplayer,
  FactoryDisplayer,
  OilRigDisplayer,
  TimeMachineDisplayer,
  BlackHoleDisplayer
} from "./dabdisplayer";
import { DabVisual } from "./dabvisual";

class Nice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      dabsPerSecond: 0,
      numberOfDabbers: 0,
      numberOfFarms: 0,
      numberOfFactories: 0,
      numberOfOilRigs: 0,
      numberOfTimeMachines: 0,
      numberOfBlackHoles: 0,
      noCost: false,
      intervals: [],

      make(fun, delay) {
        const newInterval = setInterval.apply(
          window,
          [fun, delay].concat([].slice.call(arguments, 2))
        );

        this.intervals.push(newInterval);
        return newInterval;
      },

      clearAll() {
        let len = this.intervals.length;

        while (len-- > 0) {
          clearInterval(this.intervals.shift());
        }
      },

      clearOne() {
        clearInterval(this.intervals.shift());
      },

      intervalsFarm: [],

      makeFarm(fun, delay) {
        const newInterval = setInterval.apply(
          window,
          [fun, delay].concat([].slice.call(arguments, 2))
        );

        this.intervalsFarm.push(newInterval);
        return newInterval;
      },

      clearAllFarm() {
        let len = this.intervalsFarm.length;

        while (len-- > 0) {
          clearInterval(this.intervalsFarm.shift());
        }
      },
      clearOneFarm() {
        clearInterval(this.intervalsFarm.shift());
      },

      intervalsFactory: [],

      makeFactory(fun, delay) {
        const newInterval = setInterval.apply(
          window,
          [fun, delay].concat([].slice.call(arguments, 2))
        );

        this.intervalsFactory.push(newInterval);
        return newInterval;
      },

      clearAllFactory() {
        let len = this.intervalsFactory.length;

        while (len-- > 0) {
          clearInterval(this.intervalsFactory.shift());
        }
      },

      clearOneFactory() {
        clearInterval(this.intervalsFactory.shift());
      },

      intervalsOilRig: [],

      makeOilRig(fun, delay) {
        const newInterval = setInterval.apply(
          window,
          [fun, delay].concat([].slice.call(arguments, 2))
        );

        this.intervalsOilRig.push(newInterval);
        return newInterval;
      },

      clearAllOilRig() {
        let len = this.intervalsOilRig.length;

        while (len-- > 0) {
          clearInterval(this.intervalsOilRig.shift());
        }
      },

      clearOneOilRig() {
        clearInterval(this.intervalsOilRig.shift());
      },

      intervalsTimeMachine: [],

      makeTimeMachine(fun, delay) {
        const newInterval = setInterval.apply(
          window,
          [fun, delay].concat([].slice.call(arguments, 2))
        );

        this.intervalsTimeMachine.push(newInterval);
        return newInterval;
      },

      clearAllTimeMachine() {
        let len = this.intervalsTimeMachine.length;

        while (len-- > 0) {
          clearInterval(this.intervalsTimeMachine.shift());
        }
      },

      clearOneTimeMachine() {
        clearInterval(this.intervalsTimeMachine.shift());
      },

      intervalsBlackHole: [],

      makeBlackHole(fun, delay) {
        const newInterval = setInterval.apply(
          window,
          [fun, delay].concat([].slice.call(arguments, 2))
        );

        this.intervalsBlackHole.push(newInterval);
        return newInterval;
      },

      clearAllBlackHole() {
        let len = this.intervalsBlackHole.length;

        while (len-- > 0) {
          clearInterval(this.intervalsBlackHole.shift());
        }
      },

      clearOneBlackHole() {
        clearInterval(this.intervalsBlackHole.shift());
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.buyStand = this.buyStand.bind(this);
    this.cheat = this.cheat.bind(this);
    this.removeCost = this.removeCost.bind(this);
    this.sellStand = this.sellStand.bind(this);
    this.sellFarm = this.sellFarm.bind(this);
    this.buyFarm = this.buyFarm.bind(this);
    this.buyFactory = this.buyFactory.bind(this);
    this.sellFactory = this.sellFactory.bind(this);
    this.buyOilRig = this.buyOilRig.bind(this);
    this.sellOilRig = this.sellOilRig.bind(this);
    this.buyTimeMachine = this.buyTimeMachine.bind(this);
    this.sellTimeMachine = this.sellTimeMachine.bind(this);
    this.buyBlackHole = this.buyBlackHole.bind(this);
    this.sellBlackHole = this.sellBlackHole.bind(this);
  }

  cheat() {
    this.setState({ clicks: 9999999999999999999999999999999999999999 });
  }
  removeCost() {
    this.setState({ noCost: true });
  }

  handleClick(i) {
    let temp = this.state.clicks;
    temp += i;
    this.setState({ clicks: temp });
  }

  buyStand(multi) {
    const cost = 50 * multi;
    if (this.state.clicks >= cost || this.state.noCost) {
      let femp = this.state.clicks;
      femp -= cost;
      let hemp = this.state.dabsPerSecond;
      hemp += 0.25 * multi;
      let gemp = this.state.numberOfDabbers;
      gemp += 1 * multi;
      if (!this.state.noCost) {
        this.setState({ clicks: femp });
      }
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfDabbers: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.make(() => this.handleClick(1), 4000);
      }
    }
  }

  sellStand(multi) {
    if (this.state.numberOfDabbers >= multi) {
      const cost = 50 * multi;
      let femp = this.state.clicks;
      femp += cost;
      let hemp = this.state.dabsPerSecond;
      hemp -= 0.25 * multi;
      let gemp = this.state.numberOfDabbers;
      gemp -= 1 * multi;
      this.setState({ clicks: femp });
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfDabbers: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.clearOne();
      }
    }
  }

  buyFarm(multi) {
    const cost = 250 * multi;
    if (this.state.clicks >= cost || this.state.noCost) {
      let femp = this.state.clicks;
      femp -= cost;
      let hemp = this.state.dabsPerSecond;
      hemp += 2 * multi;
      let gemp = this.state.numberOfFarms;
      gemp += 1 * multi;
      if (!this.state.noCost) {
        this.setState({ clicks: femp });
      }
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfFarms: gemp });

      for (let index = 0; index < multi; index++) {
        this.state.makeFarm(() => this.handleClick(8), 4000);
      }
    }
  }

  sellFarm(multi) {
    if (this.state.numberOfFarms >= multi) {
      const cost = 250 * multi;
      let femp = this.state.clicks;
      femp += cost;
      let hemp = this.state.dabsPerSecond;
      hemp -= 2 * multi;
      let gemp = this.state.numberOfFarms;
      gemp -= 1 * multi;
      this.setState({ clicks: femp });
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfFarms: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.clearOneFarm();
      }
    }
  }

  buyFactory(multi) {
    const cost = 1000 * multi;
    if (this.state.clicks >= cost || this.state.noCost) {
      let femp = this.state.clicks;
      femp -= cost;
      let hemp = this.state.dabsPerSecond;
      hemp += 14 * multi;
      let gemp = this.state.numberOfFactories;
      gemp += 1 * multi;
      if (!this.state.noCost) {
        this.setState({ clicks: femp });
      }
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfFactories: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.makeFactory(() => this.handleClick(56), 4000);
      }
    }
  }

  sellFactory(multi) {
    if (this.state.numberOfFactories >= multi) {
      const cost = 1000 * multi;
      let femp = this.state.clicks;
      femp += cost;
      let hemp = this.state.dabsPerSecond;
      hemp -= 14 * multi;
      let gemp = this.state.numberOfFactories;
      gemp -= 1 * multi;
      this.setState({ clicks: femp });
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfFactories: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.clearOneFactory();
      }
    }
  }

  buyOilRig(multi) {
    const cost = 5000 * multi;
    if (this.state.clicks >= cost || this.state.noCost) {
      let femp = this.state.clicks;
      femp -= cost;
      let hemp = this.state.dabsPerSecond;
      hemp += 86 * multi;
      let gemp = this.state.numberOfOilRigs;
      gemp += 1 * multi;
      if (!this.state.noCost) {
        this.setState({ clicks: femp });
      }
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfOilRigs: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.makeFactory(() => this.handleClick(344), 4000);
      }
    }
  }

  sellOilRig(multi) {
    if (this.state.numberOfOilRigs >= multi) {
      const cost = 5000 * multi;
      let femp = this.state.clicks;
      femp += cost;
      let hemp = this.state.dabsPerSecond;
      hemp -= 86 * multi;
      let gemp = this.state.numberOfOilRigs;
      gemp -= 1 * multi;
      this.setState({ clicks: femp });
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfOilRigs: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.clearOneFactory();
      }
    }
  }

  buyTimeMachine(multi) {
    const cost = 100000 * multi;
    if (this.state.clicks >= cost || this.state.noCost) {
      let femp = this.state.clicks;
      femp -= cost;
      let hemp = this.state.dabsPerSecond;
      hemp += 2688 * multi;
      let gemp = this.state.numberOfTimeMachines;
      gemp += 1 * multi;
      if (!this.state.noCost) {
        this.setState({ clicks: femp });
      }
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfTimeMachines: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.makeFactory(() => this.handleClick(10752), 4000);
      }
    }
  }

  sellTimeMachine(multi) {
    if (this.state.numberOfTimeMachines >= multi) {
      const cost = 100000 * multi;
      let femp = this.state.clicks;
      femp += cost;
      let hemp = this.state.dabsPerSecond;
      hemp -= 2688 * multi;
      let gemp = this.state.numberOfTimeMachines;
      gemp -= 1 * multi;
      this.setState({ clicks: femp });
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfTimeMachines: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.clearOneFactory();
      }
    }
  }

  buyBlackHole(multi) {
    const cost = 10000000 * multi;
    if (this.state.clicks >= cost || this.state.noCost) {
      let femp = this.state.clicks;
      femp -= cost;
      let hemp = this.state.dabsPerSecond;
      hemp +=
        9999999999999999999999999999999999999999999999999999999999999999999999999 *
        multi;
      let gemp = this.state.numberOfBlackHoles;
      gemp += 1 * multi;
      if (!this.state.noCost) {
        this.setState({ clicks: femp });
      }
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfBlackHoles: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.makeFactory(
          () =>
            this.handleClick(999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999),
          4000
        );
      }
    }
  }

  sellBlackHole(multi) {
    if (this.state.numberOfBlackHoles >= multi) {
      const cost = 10000000 * multi;
      let femp = this.state.clicks;
      femp += cost;
      let hemp = this.state.dabsPerSecond;
      hemp -= 0.25 * multi;
      let gemp = this.state.numberOfBlackHoles;
      gemp -= 1 * multi;
      this.setState({ clicks: femp });
      this.setState({ dabsPerSecond: hemp });
      this.setState({ numberOfBlackHoles: gemp });
      for (let index = 0; index < multi; index++) {
        this.state.clearOneFactory();
      }
    }
  }

  reset() {
    this.setState({ clicks: 0 });
    this.state.clearAll();
  }

  render() {
    return (
      <div id="bodyGrid">
        {/* <Title /> */}
        <div className="verticalLine" />
        <div id="displayContainer">
          <DabDisplayer
            numberOfDabbers={this.state.numberOfDabbers}
            Buy={this.buyStand}
            Sell={this.sellStand}
          />
          <FarmDisplayer
            numberOfDabbers={this.state.numberOfFarms}
            Buy={this.buyFarm}
            Sell={this.sellFarm}
          />
          <FactoryDisplayer
            numberOfDabbers={this.state.numberOfFactories}
            Buy={this.buyFactory}
            Sell={this.sellFactory}
          />
          <OilRigDisplayer
            numberOfDabbers={this.state.numberOfOilRigs}
            Buy={this.buyOilRig}
            Sell={this.sellOilRig}
          />
          <TimeMachineDisplayer
            numberOfDabbers={this.state.numberOfTimeMachines}
            Buy={this.buyTimeMachine}
            Sell={this.sellTimeMachine}
          />
          <BlackHoleDisplayer
            numberOfDabbers={this.state.numberOfBlackHoles}
            Buy={this.buyBlackHole}
            Sell={this.sellBlackHole}
          />
        </div>
        <Counter
          clicks={this.state.clicks}
          dabsPerSecond={this.state.dabsPerSecond}
        />
        <DabVisual onClick={this.handleClick} />
        {/* <div id="buttonGrid">
          <Child onClick={this.handleClick} />
          <Reset
            onClick={this.reset}
            onClick2={this.cheat}
            onClick3={this.removeCost}
          />
        </div> */}
      </div>
    );
  }
}
// ========================================

ReactDOM.render(<Nice />, document.getElementById("root"));
