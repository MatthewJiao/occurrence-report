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
import Footer from './Footer'

import Button from '@material-ui/core/Button';

export class Investigation extends Component {

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

                    <TextField
                        id="outlined-multiline-static"
                        label="Summary"
                        multiline
                        rows={6}
                        placeholder="Story"
                        variant="outlined"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}
                        onChange={handleChange('narrative0')}
                        defaultValue = {narrative0}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Cause Factor #1"
                        
                        placeholder="Cause"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('causeFactor1')}
                        defaultValue = {causeFactor1}
                    /> 
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Narrative"
                        multiline
                        rows={3}
                        placeholder="Story"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('narrative1')}
                        defaultValue = {narrative1}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Cause Factor #2"
                        
                        placeholder="Cause"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('causeFactor2')}
                        defaultValue = {causeFactor2}
                    /> 
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Narrative"
                        multiline
                        rows={3}
                        placeholder="Story"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('narrative2')}
                        defaultValue = {narrative2}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Cause Factor #3"
                        
                        placeholder="Cause"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('causeFactor3')}
                        defaultValue = {causeFactor3}
                    /> 
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Narrative"
                        multiline
                        rows={3}
                        placeholder="Story"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('narrative3')}
                        defaultValue = {narrative3}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Human Factor #1"
                        
                        placeholder="Cause"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('humanFactor1')}
                        defaultValue = {humanFactor1}
                    /> 
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Narrative"
                        multiline
                        rows={3}
                        placeholder="Story"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('narrative4')}
                        defaultValue = {narrative4}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Human Factor #2"
                        
                        placeholder="Cause"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('humanFactor2')}
                        defaultValue = {humanFactor2}
                    /> 
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Narrative"
                        multiline
                        rows={3}
                        placeholder="Story"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('narrative5')}
                        defaultValue = {narrative5}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Human Factor #3"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        placeholder="Cause"

                        onChange={handleChange('humanFactor3')}
                        defaultValue = {humanFactor3}
                    /> 
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Narrative"
                        multiline
                        rows={3}
                        placeholder="Story"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('narrative6')}
                        defaultValue = {narrative6}
                    /> 
                    
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



export default Investigation
