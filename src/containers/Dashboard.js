import React, { Component } from 'react';

const API = "https://api.coindesk.com/v1/bpi/currentprice/GBP.json"



  class Dashboard extends Component{

    constructor( ){ 
    super()
      this.state={
        coin:null
      }
    }

  componentDidMount(){
      fetch(API)
      .then(res => res.json())
      .then(data => this.setState={ coin : data.bpi.GBP.rate }  
      )
     
    }


  render(){
  
  return (
    <div>
    Price of BitCoin today is {this.state.coin}
    </div>
  );
  
  
  }
}

export default Dashboard;
