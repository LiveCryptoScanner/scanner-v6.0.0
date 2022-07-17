import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
const FormLabel = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  top: '-19px',
  background: '#132235',
  width: 'max-content',
  padding: '0px 16px',
}));
const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '20M',
  },
  {
    value: 37,
    label: '30M',
  },
  {
    value: 100,
    label: '100M',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function Volumefilter() {
  return (
    <Box style={{width:'100%',padding: '10px',
    border: '1px solid #595555',
    borderRadius: '6px',margin: '0px 7px',}}>
        <FormLabel id="demo-row-radio-buttons-group-label">Volume</FormLabel>
      <Slider
        aria-label="Always visible"
        defaultValue={30}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
