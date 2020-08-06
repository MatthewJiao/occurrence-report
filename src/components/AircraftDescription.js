import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from "@material-ui/core/TextField";
import RaisedButton from 'material-ui/RaisedButton'

import Stepper from './Stepper'
import Footer from './Footer'

import Button from '@material-ui/core/Button';


export class AircraftDescription extends Component {

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
        const {makeAndModel, weight, payloadDescription, timeSinceNew, registration, MTOW, timeSinceLastInspection} = values
        return (
            <MuiThemeProvider>
                <Stepper
                activeStep = {values.step}

            />
                <React.Fragment>
                    <br/>
                    <div className="moreRoom shift3">

            
                    <TextField
                        id="outlined-multiline-static"
                        label="Make and Model"
                        
                        placeholder="XXXXXXXXXXX   XXXXXXXXXXX"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('makeAndModel')}
                        defaultValue = {values.makeAndModel}
                    /> 
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Weight of Aircraft"
                        
                        placeholder="kg"
                        style = {{minWidth:200, fontVariant: 'small-caps'}}

                        onChange={handleChange('weight')}
                        defaultValue = {values.weight}
                    /> 
                    <br/>
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Payload Description"
                        multiline
                        rows={3}
                        placeholder="Description"
                        style = {{minWidth:500, fontVariant: 'small-caps' }}
                        variant = "outlined"
                        onChange={handleChange('payloadDescription')}
                        defaultValue = {payloadDescription}
                    /> 

                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Time Since New"
                        
                        placeholder="hh:mm"
                        style = {{minWidth:300, fontVariant: 'small-caps'}}

                        onChange={handleChange('timeSinceNew')}
                        defaultValue = {values.timeSinceNew}
                    />
                    <br/>
                    
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Aircraft Registration"
                        
                        placeholder="Registration"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('registration')}
                        defaultValue = {values.registration}
                    />
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Enter MTOW"
                        
                        placeholder="mtow"
                        style = {{minWidth:500, fontVariant: 'small-caps'}}

                        onChange={handleChange('MTOW')}
                        defaultValue = {values.MTOW}
                    />
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Time Since Last Inspection"
                        
                        placeholder="hh:mm"
                        style = {{minWidth:300, fontVariant: 'small-caps'}}

                        onChange={handleChange('timeSinceLastInspection')}
                        defaultValue = {values.timeSinceLastInspection}
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
            <Footer/>
            </MuiThemeProvider>
        )
    }
}


const styles = {
    button:{
        margin: 15
    }
}

export default AircraftDescription
