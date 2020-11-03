import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    if (this.props.count === 0) {
      this.count = 0;
    } else {
      this.props.dispatch({ type: "DECREMENT" });
    }
  };

  render() {
    return (
      <div className="counter">
        <h2>Redux Counter</h2>
        <div className="counter-container">
          <button onClick={this.decrement}>-</button>
          <div className="count-card">
            <span className="count" key={this.props.count}>
              {this.props.count}
            </span>
          </div>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

//transforms redux state into an object containing props
function mapStateToProps(state) {
  return {
    count: state.count
  };
}
//connect passes entire state of Counter through mapStateToProps function and pull out whats needed
export default connect(mapStateToProps)(Counter);
