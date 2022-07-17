import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


const FormLabel = styled(FormControl)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  top: '-10px',
  background: '#132235',
  width: 'max-content',
  padding: '0px 16px',
}));

export default function FsrFilter() {
  return (
    <FormControl style={{
      width:"100%",
      padding: '0px 10px 10px 10px',
      border: '1px solid #595555',
      borderRadius: '6px', margin: '0px 7px',
    }}>
      <FormLabel id="demo-row-radio-buttons-group-label">FSR</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Above" control={<Radio />} label="Above" />
        <FormControlLabel value="Below" control={<Radio />} label="Below" />
        <TextField id="demo-helper-text-misaligned-no-helper" label="Value" />
      </RadioGroup>


    </FormControl>
  );
}
