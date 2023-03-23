import React from "react";
import _ from "lodash";

class Activity extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      keys :  _.keys(this.props.data.Data),
      values : _.values(this.props.data.Data)
    }
  }
  render(){
    console.log("Activity",this.props.data);
    return (
      <div className="Activity">
        <table>
          <thead>
            <tr>
              {_.map(this.state.keys,(keyItem,index) => (
                <th key={index}>{keyItem}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {_.map(this.state.values, (valueItem, index) => (
                <td key={index}>{valueItem}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default Activity;