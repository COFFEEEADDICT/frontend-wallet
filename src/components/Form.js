import React, { Component } from "react";
import Currency from "./Currency";
import Amount from "./Amount";
import Message from "./Message";
import NameSelector from "./NameSelector";

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

    state={
      currency:"",
      amount:0,
      status:"sent",
      currency:"",
      user:""
    }
   
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  
  render(){ 
    return (
      <div className="dash-form">
        <div className="d-form-item">
          Currency:
          <Currency />
        </div>
        <div className="d-form-item">
          <Amount />
        </div>
        <div className="d-form-item">
          <NameSelector usersFilter={this.props.usersFilter} />
        </div>
        <div className="d-form-item">
          <Message />
        </div>
        <div className="d-form-btn">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              Send
            </Button>
          </ThemeProvider>
        </div>
      </div>
    );
  };

}

  export default Form 