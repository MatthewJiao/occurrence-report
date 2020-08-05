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

export class PreventativeMeasures extends Component {

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
        const {preventativeMeasure1, description1, tracking1, dateOfImplementation1, preventativeMeasure2, description2, tracking2, dateOfImplementation2, preventativeMeasure3,
            description3, tracking3, dateOfImplementation3} = values
        return (
            <MuiThemeProvider>
                <Stepper
                activeStep = {values.step}
                />
                <React.Fragment>
                    
                    <br/>
                    
                    <div className="moreRoom shift9">

            
                    <TextField
                        id="outlined-multiline-static"
                        label="Preventative Measure 1"
                        
                        placeholder="Measure"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('preventativeMeasure1')}
                        defaultValue = {preventativeMeasure1}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={3}
                        placeholder="Description"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}
                        variant = "outlined"
                        onChange={handleChange('description1')}
                        defaultValue = {description1}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Method of Tracking"
                        multiline
                        rows={3}
                        placeholder="Method"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}
                        variant = "outlined"

                        onChange={handleChange('tracking1')}
                        defaultValue = {tracking1}
                    />
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Date of Implementation"
                        
                        placeholder="yyyy/mm/dd"
                        style = {{minWidth:200, fontVariant: 'small-caps'}}

                        onChange={handleChange('dateOfImplementation1')}
                        defaultValue = {dateOfImplementation1}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Preventative Measure 2"
                        
                        placeholder="Measure"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('preventativeMeasure2')}
                        defaultValue = {preventativeMeasure2}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={3}
                        placeholder="Description"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}
                        variant = "outlined"
                        onChange={handleChange('description2')}
                        defaultValue = {description2}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Method of Tracking"
                        multiline
                        rows={3}
                        placeholder="Method"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}
                        variant = "outlined"

                        onChange={handleChange('tracking2')}
                        defaultValue = {tracking2}
                    />
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Date of Implementation"
                        
                        placeholder="yyyy/mm/dd"
                        style = {{minWidth:200, fontVariant: 'small-caps'}}

                        onChange={handleChange('dateOfImplementation2')}
                        defaultValue = {dateOfImplementation2}
                    />
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Preventative Measure 3"
                        
                        placeholder="Measure"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('preventativeMeasure3')}
                        defaultValue = {preventativeMeasure3}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={3}
                        placeholder="Description"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}
                        variant = "outlined"
                        onChange={handleChange('description3')}
                        defaultValue = {description3}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Method of Tracking"
                        multiline
                        rows={3}
                        placeholder="Method"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}
                        variant = "outlined"

                        onChange={handleChange('tracking3')}
                        defaultValue = {tracking3}
                    />
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Date of Implementation"
                        
                        placeholder="yyyy/mm/dd"
                        style = {{minWidth:200, fontVariant: 'small-caps'}}

                        onChange={handleChange('dateOfImplementation3')}
                        defaultValue = {dateOfImplementation3}
                    />
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



export default PreventativeMeasures
