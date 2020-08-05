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


export class MissionDescription extends Component {

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
        const {missionType, location, riskCategory, flightMode, city, geoCoordinates} = values
        return (
            <MuiThemeProvider>
                <Stepper
                activeStep = {values.step}
                />
                <React.Fragment>
                    
                    <br/>
                    
                    <div className="moreRoom shift4">

                    <FormControl style = {{minWidth:300, fontVariant: 'small-caps'}}>
                        <InputLabel id="demo-simple-select-label">Mission Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={missionType}
                            onChange={handleChange('missionType')}
                            >
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="video">Video</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="agriculture">Agriculture</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="structureInspection">Structure Inspection</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="publicSaftey">Public Safety</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="photoGrammetry">Photogrammetry</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="other">Other</MenuItem>

                        </Select>
                    </FormControl>

        
                        <br/>
                        <br/>

                        <FormControl component="fieldset" style = {{fontVariant: 'small-caps'}}>
                        <FormLabel component="legend">Risk Category</FormLabel>
                            <RadioGroup row aria-label="riskCategory" name="riskCategory1" value={riskCategory} onChange={handleChange('riskCategory')}>
                                <FormControlLabel value="basic" control={<Radio />} label="Basic" />
                                <FormControlLabel value="advanced" control={<Radio />} label="Advanced" />
                            </RadioGroup>
                        </FormControl>
                        <br/>
                        <FormControl style = {{fontVariant: 'small-caps'}} component="fieldset">
                        <FormLabel component="legend">Flight Mode</FormLabel>
                            <RadioGroup row aria-label="flightMode" name="flightMode1" value={flightMode} onChange={handleChange('flightMode')}>
                                <FormControlLabel value="manual" control={<Radio />} label="Manual" />
                                <FormControlLabel value="automatic" control={<Radio />} label="Automatic" />
                            </RadioGroup>
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl style = {{minWidth:300, fontVariant: 'small-caps'}}>
                        <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={location}
                            onChange={handleChange('location')}
                            >
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="ontario">Ontario</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="quebec">Quebec</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="britishColumbia">British Columbia</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="alberta">Alberta</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="saskachewan">Saskachewan</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="manitoba">Manitoba</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="newBrunswick">New Brunswick</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="novaScotia">Nova Scotia</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="newfoundlandAndLabrador">Newfoundland and Labrador</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="yukon">Yukon</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="northWestTerritories">North West Territories</MenuItem>
                            <MenuItem style = {{fontVariant: 'small-caps'}} value="nunavut">Nunavut</MenuItem>

                        </Select>
                    </FormControl>
                        <br/>
                        <FormControl style = {{fontVariant: 'small-caps'}}component="fieldset">
                        

                        <TextField
                        id="outlined-multiline-static"
                        label="City"
                        
                        placeholder="City"
                        style = {{minWidth:300}}

                        onChange={handleChange('city')}
                        defaultValue = {values.city}
                        />
                        </FormControl>

                        <br/>
                    
                        <TextField
                            id="outlined-multiline-static"
                            label="Geographic Coordinates"
                            
                            placeholder="dd/mm/ss"
                            style = {{minWidth:300, fontVariant: 'small-caps'}}

                            onChange={handleChange('geoCoordinates')}
                            defaultValue = {values.geoCoordinates}
                        />
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



export default MissionDescription
