import React from "react";
import { connect } from "react-redux";
import { Increment, Decrement, Reset } from "./Redux/Actions/CounterAction";
import _ from "lodash";

class App1 extends React.Component{
  constructor(){
    super();
    this.state = {
      number :2
    }
  }

  increment (e){
    const number = _.toNumber(e.target.value);
    this.setState({ number : number})
  }
  render(){
    let Count = this.props.Counter;
    return (
      <div className="App1">
        <h1>{Count}</h1>
        <br/>
        <input type="number" onChange={this.increment.bind(this)}></input>
        <button onClick={() =>{this.props.Inc(this.state.number)}}>Increment BY {this.state.number}</button>
        <br/>
        <button onClick={() => {this.props.Inc(1)}}>Increment</button>
        <button onClick={this.props.Dec}>Decrement</button>
        <button onClick={this.props.Res}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const Counter = state.count;
  return {
    Counter : Counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Inc : (number) => dispatch(Increment(number)),
    Dec : () => dispatch(Decrement()),
    Res : () => dispatch(Reset())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App1);