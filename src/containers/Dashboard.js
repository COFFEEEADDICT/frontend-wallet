import React, { Component } from 'react';

const API = "https://api.coindesk.com/v1/bpi/currentprice/GBP.json"

  

   

  class Dashboard extends Component{
    
      state={
        coin:"",
        updateTime:""
      } 
    

  componentDidMount(){
      fetch(API)
      .then(res => res.json())
      .then(data => this.setState( { coin : data.bpi.GBP.rate, updateTime : data.time.updateduk } ))
    }

    
  render(){
  
  return (
    <div>
      
      <h1>
      Welcome back { }
      </h1> 
      
      <p>
      ₿itcoin £{this.state.coin.slice(0,-5)} - Last updated on {this.state.updateTime}
      </p>

    </div>
  );

  
  

    
  
  }
}

export default Dashboard;
