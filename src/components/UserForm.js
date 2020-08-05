import React, { Component } from 'react'
import ReportDetails from './ReportDetails'
import OccurrenceCategory from './OccurrenceCategory'
import AircraftDescription from './AircraftDescription'
import MissionDescription from './MissionDescription'
import OccurrenceDescription from './OccurrenceDescription'
import FlightConditions from './FlightConditions'
import PersonnelConditions from './PersonnelCondition'
import Investigation from './Investigation'
import PreventativeMeasures from './PreventativeMeasures'
import Slider from './Slider'


import Confirm from './Confirm'
import Success from './Success'
import Test from './Test'



export class UserForm extends Component {
    state = {
        step: 0,
        reportNumber: '',
        dateOfOccurance: '',
        authorOfReport: '',
        status: '',
        time: '',
        occupation: '',
        city: '',
        bio: '',
        severity: '',
        flightPhase: '',
        damageLevel: 25,
        injury: '',
        makeAndModel: '',
        weight: '',
        payloadDescription: '',
        timeSinceNew: '',
        registration: '',
        MTOW: '',
        timeSinceLastInspection:'',
        missionType: '',
        location: '',
        riskCategory: '',
        flightMode: '',
        city: '',
        geoCoordinates: '',
        eventDescriptor: '',
        systemDescriptor: '',
        occurrenceDescription: '',
        aircraftDamages: '',
        environmentDamages: '',
        personnelDamages: '',
        lightConditions: '',
        clouds: '',
        weather: '',
        temperature: '',
        visibility: '',
        ceilingAltitude: '',
        windDirection: '',
        windSpeed: '',
        other: '',
        specificNotes: '',
        occupation: '',
        personnelInjury: '',
        training: '',
        currency: '',
        dutyHours: '',
        comments: '',
        narrative0: '',
        causeFactor1: '',
        narrative1: '',
        causeFactor2: '',
        narrative2: '',
        causeFactor3: '',
        narrative3: '',
        humanFactor1: '',
        narrative4: '',
        humanFactor2: '',
        narrative5: '',
        humanFactor3: '',
        narrative6: '',
        preventativeMeasure1: '',
        description1: '',
        tracking1: '',
        dateOfImplementation1: '',
        preventativeMeasure2: '',
        description2: '',
        tracking2: '',
        dateOfImplementation2: '',
        preventativeMeasure3: '',
        description3: '',
        tracking3: '',
        dateOfImplementation3: ''
    }

    nextStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }



    render() {
        const {step} = this.state;
        const {
            preventativeMeasure1, description1, tracking1, dateOfImplementation1, preventativeMeasure2, description2, tracking2, dateOfImplementation2, preventativeMeasure3,
            description3, tracking3, dateOfImplementation3, narrative0, causeFactor1, narrative1, causeFactor2, narrative2, causeFactor3, narrative3, humanFactor1, narrative4, humanFactor2, narrative5, humanFactor3, narrative6,
            occupation, personnelInjury, training, currency, dutyHours, comments, lightConditions, clouds, weather, temperature, visibility, ceilingAltitude, windDirection, windSpeed, other, specificNotes, eventDescriptor, systemDescriptor, occurrenceDescription, aircraftDamages, environmentDamages, personnelDamages,missionType, location, riskCategory, flightMode, city, geoCoordinates,makeAndModel, weight, payloadDescription, timeSinceNew, registration, MTOW, timeSinceLastInspection, flightPhase, damageLevel, injury, reportNumber, dateOfOccurance, status, time, authorOfReport, severity} = this.state;
        const values = {step,preventativeMeasure1, description1, tracking1, dateOfImplementation1, preventativeMeasure2, description2, tracking2, dateOfImplementation2, preventativeMeasure3,
            description3, tracking3, dateOfImplementation3, narrative0, causeFactor1, narrative1, causeFactor2, narrative2, causeFactor3, narrative3, humanFactor1, narrative4, humanFactor2, narrative5, humanFactor3, narrative6, occupation, personnelInjury, training, currency, dutyHours, comments, lightConditions, clouds, weather, temperature, visibility, ceilingAltitude, windDirection, windSpeed, other, specificNotes, eventDescriptor, systemDescriptor, occurrenceDescription, aircraftDamages, environmentDamages, personnelDamages, missionType, location, riskCategory, flightMode, city, geoCoordinates, makeAndModel, weight, payloadDescription, timeSinceNew, registration, MTOW, timeSinceLastInspection,flightPhase, damageLevel, injury,reportNumber, dateOfOccurance, status, time, authorOfReport, severity}

        switch(step) {
            case 0:
                return(
                    <ReportDetails
                    nextStep= {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                    
                )
            case 1: 
                return(
                    <OccurrenceCategory
                    nextStep= {this.nextStep}
                    prevStep= {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                )
            case 2:
                return (
                <AircraftDescription
                    nextStep= {this.nextStep}
                    prevStep= {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                )
            case 3:
                return (
                    <MissionDescription
                        nextStep= {this.nextStep}
                        prevStep= {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                        />
                    )
            case 4:
                return(
                    <OccurrenceDescription
                    nextStep= {this.nextStep}
                        prevStep= {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 5:
                return(
                    <FlightConditions
                    nextStep= {this.nextStep}
                        prevStep= {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 6:
                return(
                    <PersonnelConditions
                    nextStep= {this.nextStep}
                        prevStep= {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 7:
                return(
                    <Investigation
                    nextStep= {this.nextStep}
                        prevStep= {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 8:
                return(
                    <PreventativeMeasures
                    nextStep= {this.nextStep}
                        prevStep= {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 9:
                return(
                    <Confirm
                    nextStep= {this.nextStep}
                        prevStep= {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
        }

    }
}

export default UserForm
