import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {

    continue = e => {
        e.preventDefault();
        //send to db
        this.props.nextStep();
    }


    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
       
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>You will get an email with further instructions</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}




export default Success
