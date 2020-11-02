import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
    
  increment = () => {
      this.props.dispatch({type: 'INCREMENT'})
  };

  decrement = () => {
      this.props.dispatch({type: 'DECREMENT'})
  };
  render() {
    return (
      <div>
        <h2>Redux Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span key={this.props.count}>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

//transforms redux state into an object containing props
function mapStateToProps(state){
    return{
        count: state.count
    }
}
//connect passes entire state of Counter through mapStateToProps function and pull out whats needed
export default connect(mapStateToProps)(Counter);
