import React, { Component } from "react";
 
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#3bd39f",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

  
  class Form extends Component {

    constructor(props) {
      super(props);
      this.state={
        currency:"",
        amount:0,
        user:"",
        message:"",
        id: props.user.id
      }
    }
     
   
    handleChange = name => ({target: {value} }) => {
      this.setState({
        ...this.state,
        [name]: value
      });
    };
  

    currencyFilter = (currencies) => {
      return currencies.map((c) => (
        <MenuItem value={c.value}>
          {c.label}
        </MenuItem>
      ));
    };

    
  render(){ 


    const useStylesName = makeStyles((theme) => ({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }));
 
  
    const {currency,amount,user,message} = this.state
    const currencies = [
      {
        value: 3,
        label: '£ Pound',
      },
      {
        value: 1,
        label: '฿ BitCoin',
      },
      {
        value: 2,
        label: 'Ξ Ethereum',
      }
    ];
    
    return (
      <div className="dash-form">
         {/* Currency */}
        <div className="d-form-item">
          Currency:
          
          <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={currency}
          onChange={this.handleChange("currency")}
          label="currency"
          > 
          {this.currencyFilter(currencies)}
          </Select>
          
           
        
        {/* AMOUNT */}
        </div>  
        <div className="d-form-item">
        {/* <FormControl fullWidth className={classes.margin}> */}
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <Input
          id="amount"
          value={amount}
          onChange={this.handleChange("amount")}
          startAdornment={<InputAdornment position="start">{}</InputAdornment>}
        />
      {/* </FormControl> */}
        </div> 
     {/* USERS */}
        <div className="d-form-item"> 
        <FormControl variant="outlined" className={useStylesName}>
        <InputLabel id="demo-simple-select-outlined-label">Users</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={user}
          onChange={this.handleChange("user")}
          label="user"
        > 
         {this.props.usersFilter()}
        </Select>
      </FormControl>
          {/* MESSAGE */}
        </div>
        <div className="d-form-item">
        <TextField 
        required id="standard-required" 
        label="Message Required" 
        defaultValue="..."
        value={message}
        onChange={this.handleChange("message")}
         />
        </div>
        <div className="d-form-btn">
          <ThemeProvider theme={theme}>
            <Button 
            variant="contained" 
            color="primary"
            onClick={event => this.props.handleClickSubmit(event, this.state)}
            >
              Send
            </Button>
          </ThemeProvider>
        </div>
      </div>
    );
  };

}

  export default Form 