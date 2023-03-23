import './App.css';
import React from 'react';
import DataList from './App-Components/DataList';
import _ from "lodash";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Api : "https://api.publicapis.org/entries",
      Type : "Public",
      Data : '',
      typeChanger: false
    }
  }
  
  componentDidMount(){
    this.getdata(this.state)
  }

  componentDidUpdate(prevProps,prevState){
    // console.log("PreviousProps", prevProps);
    // console.log("PreviousState", prevState);
    // this.getdata();
  }

   async getdata (detail) {
    const api = detail.Api;
    const response = await fetch(api);
    const data = await response.json();
    this.setState({
      ...this.state,
      Data : data,
      Api : detail.Api,
      Type : detail.Type
    })
  }
  change(type){
    if(type.TypeChanger){
      const data = {
        ...this.state,
        Api : "https://www.boredapi.com/api/activity",
        Type : "Activity"
      }
      this.getdata(data)
    }else {
      const data = {
        ...this.state,
        Api : "https://api.publicapis.org/entries",
        Type : "Public"
      }
      this.getdata(data);
    }
  }
  render(){
    if(_.isEmpty(this.state.Data)){
      return null;
    }else {
      return(
        <div className='App'>
          <DataList data = {this.state} change = {this.change.bind(this)} />
        </div>
      )
    }
  }
}
export default App;