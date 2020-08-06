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
import Footer from './Footer'

import Button from '@material-ui/core/Button';


export class FlightConditions extends Component {

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
        const {lightConditions, clouds, weather, temperature, visibility, ceilingAltitude, windDirection, windSpeed, other, specificNotes} = values
        return (
            <MuiThemeProvider>
                <Stepper
                activeStep = {values.step}
                 />
                <React.Fragment>
                <br/>
                    <br/>
                    <div className="moreRoom shift6">

                    <div className="box">
                    <FormControl style = {{fontVariant: 'small-caps'}} component="fieldset">
                        <FormLabel component="legend">Light Conditions</FormLabel>
                        <RadioGroup row aria-label="lightConditions" name="lightConditions1" value={lightConditions} onChange={handleChange('lightConditions')}>
                            <FormControlLabel value="dayLight" control={<Radio />} label="Day Light" />
                            <FormControlLabel value="nightTime" control={<Radio />} label="Night Time" />
                            <FormControlLabel value="dawnDusk" control={<Radio />} label="Dawn/Dusk" />

                        </RadioGroup>
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl style = {{fontVariant: 'small-caps'}} component="fieldset">
                        <FormLabel component="legend">Clouds</FormLabel>
                        <RadioGroup row aria-label="clouds" name="clouds1" value={clouds} onChange={handleChange('clouds')}>
                            <FormControlLabel value="clearSky" control={<Radio />} label="Clear Sky" />
                            <FormControlLabel value="few" control={<Radio />} label="Few" />
                            <FormControlLabel value="scattered" control={<Radio />} label="Scattered" />
                            <FormControlLabel value="broken" control={<Radio />} label="Broken" />
                            <FormControlLabel value="overCast" control={<Radio />} label="Overcast" />

                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <br/>
                    

                    <FormControl style = {{minWidth:155, fontVariant: 'small-caps'}}>
                        <InputLabel id="demo-simple-select-label">Weather</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={weather}
                            onChange={handleChange('weather')}
                            >
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event1">Light Rain</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event2">Heavy Rain</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event3">Icing</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event4">Light Snow</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event5">Heavy Snow</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="event6">Storm</MenuItem>

                        </Select>
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl component="fieldset">
                        
                        <TextField
                            id="outlined-multiline-static"
                            label="Temperature"
                            
                            placeholder="c"
                            style = {{minWidth:300, fontVariant: 'small-caps'}}

                            onChange={handleChange('temperature')}
                            defaultValue = {temperature}
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl component="fieldset">
                    
                        <TextField
                            id="outlined-multiline-static"
                            label="Ceiling Altitude"
                            
                            placeholder="m"
                            style = {{minWidth:300, fontVariant: 'small-caps'}}

                            onChange={handleChange('ceilingAltitude')}
                            defaultValue = {ceilingAltitude}
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl component="fieldset">
                    
                        <TextField
                            id="outlined-multiline-static"
                            label="Wind Direction"
                            
                            placeholder="dd/mm/ss"
                            style = {{minWidth:300, fontVariant: 'small-caps'}}

                            onChange={handleChange('windDirection')}
                            defaultValue = {windDirection}
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl style = {{fontVariant: 'small-caps'}} component="fieldset">
                        <FormLabel component="legend">Other</FormLabel>
                        <RadioGroup row aria-label="other" name="other1" value={other} onChange={handleChange('other')}>
                            <FormControlLabel value="indoorOperation" control={<Radio />} label="Indoor Operation" />
                            <FormControlLabel value="confinedSpace" control={<Radio />} label="Confined Space" />
                            <FormControlLabel value="etc" control={<Radio />} label="Etc..." />

                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <FormControl component="fieldset">
                       
                        <TextField
                            id="outlined-multiline-static"
                            label="Specific Notes"
                            
                            placeholder="Notes"
                            style = {{minWidth:350, fontVariant: 'small-caps'}}

                            onChange={handleChange('specificNotes')}
                            defaultValue = {specificNotes}
                        />
                    </FormControl>                                  
                    
                    </div>
                    
                    </div>

                    <Button style = {styles.button} size="large" variant="outlined" color="secondary"  onClick = {this.back}>
                       Back
                    </Button>    


                    <Button style = {styles.button} size="large" variant="outlined" color="primary"  onClick = {this.continue}>
                       Continue
                    </Button>




                </React.Fragment>
            <Footer/>
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



export default FlightConditions
