import React, { Component } from "react";
 
import Chart from '../components/Chart';
import Form from '../components/Form';
import MenuItem from '@material-ui/core/MenuItem';

 
import "../css/dashboard.css";
 

const API = "https://api.coindesk.com/v1/bpi/currentprice/GBP.json";
 

class Dashboard extends Component {
  state = {
    coin: "",
    updateTime: "",
    amount: 0,
    message:  "",
    currency: "",
   };
 
    componentDidMount() {
      fetch(API)
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            coin: data.bpi.GBP.rate,
            updateTime: data.time.updateduk,
          })
        );
      }

  
       usersFilter =() => { 
        return this.props.users.map( u => <MenuItem value={u["id"]}>{u["name"].charAt(0).toUpperCase() + u["name"].slice(1)}</MenuItem> );
      }

  render() {
 

    return (
      <div className="dashboard" >
        
        {/* <div className="chartFix">
        <h1>Welcome back</h1>
        </div> */}

        <br></br>

        <div className="chartFix">
        <p>Price per ₿itcoin £{this.state.coin.slice(0, -5)} - Last updated on{" "}{this.state.updateTime}
        </p>     
        </div>
        
       <Chart />

       <div className="chartFix">
       <Form 
       names={this.state.names} 
       usersFilter={this.usersFilter}
       handleClickSubmit={this.props.handleClickSubmit}/>
       </div>

       </div>
    );
  }
}
export default Dashboard;
 
