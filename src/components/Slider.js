import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 600,
  },
});

const marks = [
  {
    value: 0,
    label: 'Category A',
  },
  {
    value: 25,
    label: 'Category B',
  },
  {
    value: 50,
    label: 'Category C',
  },
  {
    value: 75,
    label: 'Category D',
  },
  {
    value: 100,
    label: 'Category E',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  console.log(marks.findIndex((mark) => mark.value === value) + 1)
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();
  const damageLevel = props.damageLevel
  const handleChange = props.handleChange

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-restrict" gutterBottom>
        Damage Level
      </Typography>
      <Slider
        defaultValue={damageLevel}
        onChange={handleChange('damageLevel')}

        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}
