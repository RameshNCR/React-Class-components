import _ from "lodash";
import React from "react";
import Values from "./Values";

class Public extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keys : _.keys(this.props.data.Data.entries[0]),
      values : _.map(this.props.data.Data.entries, _.values)
    }
  }
  render (){
    console.log("public",this.props.data);
    return (
      <div className="Public">
        <table>
          <thead>
            <tr>
              {_.map(this.state.keys,(keyItem,index) => (
                <th key={index}>{keyItem}</th>
              ))}
            </tr>
          </thead>
          <Values values = {this.state.values}/>
        </table>
      </div>
    )
  }
}
export default Public