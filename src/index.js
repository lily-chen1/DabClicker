import React from "react";
import ReactDOM from "react-dom";
import "./Assets/css/style.min.css";
import { Child } from "./child";
import { Counter } from "./counter";

class Nice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    var temp = this.state.clicks;
    temp++;
    this.setState({ clicks: temp });
  }

  render() {
    return (
      <div>
        <Counter clicks={this.state.clicks} />
        <Child onClick={this.handleClick} />
      </div>
    );
  }
}
// ========================================

ReactDOM.render(<Nice />, document.getElementById("root"));
