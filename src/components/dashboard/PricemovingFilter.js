import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button, Grid, FormControl ,Radio, FormControlLabel, TextField } from '@mui/material';
import PairMenu from '@/src/components/dashboard/pair-menu';
import { styled } from '@mui/material/styles';
const FormLabel = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  top: '-19px',
  background: '#132235',
  width: 'max-content',
  padding: '0px 16px',
}));
const RadioGroup = styled(Box)(({ theme }) => ({
  marginTop:'-9px',
 }));
const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function PricemovingAverageFilter() {
  return (
    <Box style={{width:'98%',padding: '10px',
    border: '1px solid #595555',
    borderRadius: '6px',margin: '0px 7px',}}>
        <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
        <FormControl style={{width:'100%'}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Price to MA</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="MA" control={<Radio />} label="MA" />
        <FormControlLabel value="EMA" control={<Radio />} label="EMA" />
      </RadioGroup> 
    </FormControl>
        </Grid>
        <Grid item xs={6} md={2}>
        <TextField id="demo-helper-text-misaligned-no-helper" label="Length" />
        </Grid>
        <Grid item xs={6} md={3}>
        <FormControl style={{width:'100%', paddingTop:"16px"}}>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Price to MA</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Above" control={<Radio />} label="Above" />
        <FormControlLabel value="Below" control={<Radio />} label="Below" />
      </RadioGroup> 
    </FormControl>
        </Grid>
        <Grid item xs={6} md={2}>
        <TextField id="demo-helper-text-misaligned-no-helper" label="Value" />
        </Grid>
        <Grid item xs={6} md={2} sx={{ mt:1.5, textAlign:'end'}}>
            <Button variant="contained">Add Filter</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
