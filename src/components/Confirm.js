import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
//import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import '../App.css';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import TextField from "@material-ui/core/TextField";

import Stepper from './Stepper'

import Button from '@material-ui/core/Button';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    

    render() {
        const {values, handleChange} = this.props;
        const {narrative0, causeFactor1, narrative1, causeFactor2, narrative2, causeFactor3, narrative3, humanFactor1, narrative4, humanFactor2, narrative5, humanFactor3, narrative6} = values
        return (
            <MuiThemeProvider>
                <Stepper
                activeStep = {values.step}
                />
                <React.Fragment>
                    
                    <br/>
                    
                    <div className="moreRoom shift8">

                    
                    
                    </div>

                    <Button style = {styles.button} size="large" variant="outlined" color="secondary"  onClick = {this.back}>
                       Back
                    </Button>    


                    <Button style = {styles.button} size="large" variant="outlined" color="primary"  >
                       Send
                    </Button>




                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


const styles = { 
    button: {
         margin: 15
    }, 
    appBarBackground:{ 
        color: '#ffffff',
        fontFamily: "Arial" 
    }

};



export default Confirm
