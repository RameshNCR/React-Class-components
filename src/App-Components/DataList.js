import React from "react";
import Activity from "./Activity";
import Public from "./Public";
import _ from "lodash";

class DataList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      TypeChanger : true
    }
  }
  change(){
    this.setState({
      TypeChanger : !this.state.TypeChanger
    })
    this.props.change(this.state);
  }
  render(){
    return(
      <div className="DataList">
        <button onClick={this.change.bind(this)}>Change</button>
        {(_.isEqual(this.props.data.Type, "Activity"))
        ? <Activity data = {this.props.data}/>
        : <Public data = {this.props.data} />}
      </div>
    )
  }
}
export default DataList;