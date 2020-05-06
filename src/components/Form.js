<<<<<<< HEAD
import React from "react";
import Currency from "./Currency";
import Amount from "./Amount";
import Message from "./Message";
=======
import React from 'react'
import Currency from './Currency';
import Amount from './Amount';
import Message from './Message';
import NameSelector from './NameSelector';


 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
>>>>>>> 89cc897234831c97890390eb7f74ec3ea47d746d

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  }}));
 
  export default function ContainedButtons(props) {
    const classes = useStyles();
  
    
    return(

        <div>
            <Currency />
            <Amount />

            <NameSelector 
            usersFilter={props.usersFilter} />
            <Message />

            <ThemeProvider 
            theme={theme}>

              <Button 
              variant="contained" 
              color="primary" 
              handleClickSubmit={event => props.handleClickSubmit(event, this.state)}
              >Send
              </Button>

            </ThemeProvider>

        </div>

    ) 
  }
