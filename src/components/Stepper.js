import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Purple from '@material-ui/core/styles';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontWeight: 500,
    color: '#1448b3',
    width: '30%',
    margin: 'auto',
    fontVariant: 'small-caps',
    fontSize: '1.7rem',
    opacity: '1',
    fontFamily: 'Arial'


  },
}));

function getSteps() {
  return ['', '', '','','','','','','',''];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Report Details';
    case 1:
      return 'Occurrence Category';
    case 2:
      return 'Aircraft Description';
    case 3:
      return 'Mission Description';
    case 4:
      return 'Occurrence Description';
    case 5:
      return 'Flight Conditions';
    case 6:
      return 'Personnel Conditions';
    case 7:
      return 'Investigation';
    case 8:
      return 'Preventative Measures';
    case 9:
      return '';
    default:
      return 'Unknown';
  }
}



export default function HorizontalLinearStepper(props) {
  const activeStep = props.activeStep
  console.log(activeStep)

  const classes = useStyles();
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  

  

  

  

  return (
    <nav class="nav">

    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography style={{margin:'auto'}} className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          
          </div>
        ) : (
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            
        )}
      </div>
    </div>
    </nav>
  );
}
