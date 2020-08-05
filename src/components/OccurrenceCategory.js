import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import '../App.css';

import Stepper from './Stepper'

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {

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
        const {severity, flightPhase, damageLevel, injury} = values
        return (
            <MuiThemeProvider>
                <Stepper
                activeStep = {values.step}
                />
                <React.Fragment>
                    <br/>
                    <br/>
                    <br/>
                    <div className="moreRoom shift2">

                        <FormControl style = {{fontVariant: 'small-caps'}} component="fieldset">
                        <FormLabel className = "test" component="legend">Severity</FormLabel>
                            <RadioGroup row aria-label="severity" name="severity1" value={severity} onChange={handleChange('severity')}>
                                <FormControlLabel value="incident" control={<Radio />} label="Incident" />
                                <FormControlLabel value="accident" control={<Radio />} label="Accident" />
                            </RadioGroup>
                        </FormControl>
                        <br/>
                        <br/>

                        <FormControl style = {{fontVariant: 'small-caps'}} component="fieldset">
                        <FormLabel component="legend">Phase of Flight</FormLabel>
                            <RadioGroup row aria-label="flightPhase" name="flightPhase1" value={flightPhase} onChange={handleChange('flightPhase')}>
                                <FormControlLabel value="ground" control={<Radio />} label="Ground" />
                                <FormControlLabel value="air" control={<Radio />} label="Air" />
                            </RadioGroup>
                        </FormControl>
                        <br/>
                        <br/>
                        

                        <FormControl style = {{minWidth:250, fontVariant: 'small-caps'}}>
                        <InputLabel id="demo-simple-select-label">Damage Level</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={damageLevel}
                                onChange={handleChange('damageLevel')}
                                
                            >
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="categoryA">Category A</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="categoryB">Category B</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="categoryC">Category C</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="categoryD">Category D</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="categoryE">Category E</MenuItem>

                            </Select>
                        </FormControl>

                        
                        <br/>
                        <br/>
                        <FormControl style = {{fontVariant: 'small-caps'}} component="fieldset">
                        <FormLabel component="legend">Physical Injury</FormLabel>
                            <RadioGroup row aria-label="injury" name="injury1" value={injury} onChange={handleChange('injury')}>
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            </RadioGroup>
                        </FormControl>
                    
                    </div>
  
                    
                    <Button style = {styles.button} size="large" variant="outlined" color="secondary"  onClick = {this.back}>
                       Back
                    </Button>    


                    <Button style = {styles.button} size="large" variant="outlined" color="primary"  onClick = {this.continue}>
                       Continue
                    </Button>




                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


const styles = { 
    button: {
         margin: 15,
    }, 
    appBarBackground:{ 
        color: '#ffffff',
        fontFamily: "Arial" 
    }

};



export default FormPersonalDetails
