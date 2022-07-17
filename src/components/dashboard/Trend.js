import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setLaggingFull } from '@/src/features/standard/standardSlice';


import { setTimeframe } from '@/src/features/standard/standardSlice';

export default function SelectVariants() {
  const { laggingfull, laggingfulls} = useSelector((state) => state.standard);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setLaggingFull(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: '100%' }}  size="small">
      <InputLabel id="demo-simple-select-helper-label">Trend</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={laggingfull}
        label="laggingfull"
        onChange={handleChange}
      >
        {laggingfulls.map((item) => (
          <MenuItem value={item.value} key={item.name}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
