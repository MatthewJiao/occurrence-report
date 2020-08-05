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


export class OccurrenceDescription extends Component {

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
        const {eventDescriptor, systemDescriptor, occurrenceDescription, aircraftDamages, environmentDamages, personnelDamages} = values
        return (
            <MuiThemeProvider>
                <Stepper
                activeStep = {values.step}
                />
                <React.Fragment>
                
                    <br/>
                    
                    <div className="moreRoom shift5">
                    <FormControl style = {{minWidth:250,fontVariant: 'small-caps'}}>
                        <InputLabel id="demo-simple-select-label">Event Description</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={eventDescriptor}
                            onChange={handleChange('eventDescriptor')}
                            >
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event1">Event 1</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event2">Event 2</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event3">Event 3</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event4">Event 4</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event5">Event 5</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event6">Event 6</MenuItem>

                        </Select>
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl style = {{minWidth:250,fontVariant: 'small-caps'}}>
                        <InputLabel id="demo-simple-select-label">System Description</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={systemDescriptor}
                            onChange={handleChange('systemDescriptor')}
                            >
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event1">Event 1</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event2">Event 2</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event3">Event 3</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event4">Event 4</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event5">Event 5</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event6">Event 6</MenuItem>

                        </Select>
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl component="fieldset">
                        
                        <TextField
                            id="outlined-multiline-static"
                            label="Occurrence Description"
                            multiline
                            rows = {3}
                            placeholder="Description"
                            style = {{minWidth:500, fontVariant: 'small-caps'}}
                            variant="outlined"
                            onChange={handleChange('occurrenceDescription')}
                            defaultValue = {occurrenceDescription}
                        />
                    </FormControl>
        
                    <br/>
                    <br/>
                    <FormControl component="fieldset">
                        
                        <TextField
                            id="outlined-multiline-static"
                            label="Damages to the Aircraft/System"
                            
                            placeholder="Description"
                            style = {{minWidth:500, fontVariant: 'small-caps'}}
                            multiline
                            rows = {2}
                            onChange={handleChange('aircraftDamages')}
                            defaultValue = {aircraftDamages}
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl component="fieldset">
                        
                        <TextField
                            id="outlined-multiline-static"
                            label="Damages to the Environment/Property"
                            
                            placeholder="Description"
                            style = {{minWidth:500, fontVariant: 'small-caps'}}
                            multiline
                            rows = {2}
                            onChange={handleChange('environmentDamages')}
                            defaultValue = {environmentDamages}
                        />
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl component="fieldset">
                        

                        <TextField
                            id="outlined-multiline-static"
                            label="Damages to Personnel/Bystanders"
                            
                            placeholder="Description"
                            style = {{minWidth:500, fontVariant: 'small-caps'}}
                            multiline
                            rows = {2}
                            onChange={handleChange('personnelDamages')}
                            defaultValue = {personnelDamages}
                        />
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
         margin: 15
    }, 
    appBarBackground:{ 
        color: '#ffffff',
        fontFamily: "Arial" 
    }

};



export default OccurrenceDescription
