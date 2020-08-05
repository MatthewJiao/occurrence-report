import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from "@material-ui/core/TextField";
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

import Stepper from './Stepper'

import Button from '@material-ui/core/Button';

export class PersonnelConditions extends Component {

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
        const {occupation, personnelInjury, training, currency, dutyHours, comments} = values
        return (
            <MuiThemeProvider>
                <Stepper
                activeStep = {values.step}
                />
                <React.Fragment>
                    
                    <br/>
                    <div className="moreRoom shift7">
                    
                    <FormControl style = {{minWidth:200,fontVariant: 'small-caps'}}>
                        <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={occupation}
                            onChange={handleChange('occupation')}
                            >
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="video">Remote Pilot</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="agriculture">Payload Operator</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="structureInspection">Observer</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="publicSaftey">Security Support</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="photoGrammetry">Mission Specialist</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="other">Other</MenuItem>

                        </Select>
                    </FormControl>
                        <br/>
                        <br/>

                        <FormControl style = {{fontVariant: 'small-caps'}} component="fieldset">
                        <FormLabel component="legend">Injury</FormLabel>
                            <RadioGroup row aria-label="personnelInjury" name="personnelInjury1" value={personnelInjury} onChange={handleChange('personnelInjury')}>
                                <FormControlLabel value="noInjury" control={<Radio />} label="No Injury" />
                                <FormControlLabel value="minor" control={<Radio />} label="Minor Injury" />
                                <FormControlLabel value="severe" control={<Radio />} label="Severe Injury" />

                            </RadioGroup>
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl style = {{fontVariant: 'small-caps'}} component="fieldset">
                        <FormLabel component="legend">Training</FormLabel>
                            <RadioGroup row aria-label="training" name="training1" value={training} onChange={handleChange('training')}>
                                <FormControlLabel value="trainee" control={<Radio />} label="Trainee" />
                                <FormControlLabel value="experienceOnType" control={<Radio />} label="Experience on Type" />
                                <FormControlLabel value="experienceNotOnType" control={<Radio />} label="Experience, but not on type" />

                            </RadioGroup>
                        </FormControl>
                        <br/>
                        
                        <FormControl component="fieldset">
                            
                            <TextField
                                id="outlined-multiline-static"
                                label="Currency"
                                
                                placeholder="hours"
                                style = {{minWidth:300, fontVariant: 'small-caps'}}

                                onChange={handleChange('currency')}
                                defaultValue = {currency}
                            />
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl component="fieldset">
                            

                            <TextField
                                id="outlined-multiline-static"
                                label="Duty Hours"
                                
                                placeholder="hours"
                                style = {{minWidth:300, fontVariant: 'small-caps'}}

                                onChange={handleChange('dutyHours')}
                                defaultValue = {dutyHours}
                            />
                        </FormControl>
                        <br/>
                        <br/>
                        <br/>
                        <FormControl component="fieldset">
                            
                            <TextField
                            id="outlined-multiline-static"
                            label="Further Details"
                            variant="outlined"
                            placeholder="Comments"
                            style = {{minWidth:500, fontVariant: 'small-caps'}}
                            multiline
                            rows = {3}
                            onChange={handleChange('comments')}
                            defaultValue = {comments}
                        />
                        </FormControl>
                        <br/>
                    
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
         margin: 15
    }, 
    appBarBackground:{ 
        color: '#ffffff',
        fontFamily: "Arial" 
    }

};



export default PersonnelConditions
