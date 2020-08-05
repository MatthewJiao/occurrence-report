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

import Stepper from './Stepper'

import Button from '@material-ui/core/Button';


export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
            <Stepper
                activeStep = {0}
            />

                <React.Fragment>
                    <br/>
                    <br/>
                    
                    <div className="moreRoom shift1">
                    
                
                    
                    <TextField
                        id="outlined-multiline-static"
                        label="Report Number"
                        
                        placeholder="##########"
                        style = {{minWidth:150,  fontVariant: 'small-caps'}}
                        onChange={handleChange('reportNumber')}
                        defaultValue = {values.reportNumber}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Enter the Date of Occurrance"
                        
                        placeholder="yyyy/mm/dd"
                        style = {{minWidth:300, fontVariant: 'small-caps'}}

                        onChange={handleChange('dateOfOccurance')}
                        defaultValue = {values.dateOfOccurance}
                    />
                    <br/>
                    <br/>
                    <FormControl component="fieldset">
                        
                        <FormLabel component="stat" style = {{minWidth:300, fontVariant: 'small-caps'}}>Status</FormLabel>
                        <RadioGroup row aria-label="status" name="status1" value={values.status} onChange={handleChange('status')} style = {{minWidth:300, fontVariant: 'small-caps'}}>
                            <FormControlLabel value="draft" control={<Radio />} label="Draft" />
                            <FormControlLabel value="investigation" control={<Radio />} label="Publish for Investigation" />
                            <FormControlLabel value="final" control={<Radio />} label="Publish for Final Report" />

                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Enter Time"
                        
                        placeholder="hh:mm"
                        style = {{minWidth:250,fontVariant: 'small-caps'}}

                        onChange={handleChange('time')}
                        defaultValue = {values.time}
                    />
                    <br/>
                    <br/>

                    <TextField
                        id="outlined-multiline-static"
                        label="Author of Report"
                        
                        placeholder="Author"
                        style = {{minWidth:300, fontVariant: 'small-caps'}}

                        onChange={handleChange('authorOfReport')}
                        defaultValue = {values.authorOfReport}
                    />
                    </div>
                    <br/>

                    <Button size="large" variant="outlined" color="primary"  onClick = {this.continue}>
                       Continue
                    </Button>


                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


const styles = {
    button:{
        margin: 15,
        color: '#7dba8d',
        borderRadius: '2rem'
    },
    fontStuff:{ 
        color: '#32a852',
        fontWeight: 900 ,
        minWidth:300 
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      }
}

export default FormUserDetails
