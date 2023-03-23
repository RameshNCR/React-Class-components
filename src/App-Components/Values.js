import _ from "lodash";
import React from "react";

class Values extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      values : this.props.values
    }
  }
  render(){
    return(
      <tbody>
        {_.map(this.state.values, (values, index) => (
          <tr key={index}>
            {_.map(values, (valueItem, index) => (
              <td key={index}>{valueItem}</td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }
}
export default Values;