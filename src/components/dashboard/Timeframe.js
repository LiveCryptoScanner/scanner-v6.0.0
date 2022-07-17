import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { setTimeframe } from '@/src/features/standard/standardSlice';

export default function SelectVariants() {
  const { timeframes, timeframe } = useSelector((state) => state.standard);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setTimeframe(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: '92%' }} size="small">
      <InputLabel id="demo-simple-select-helper-label">Timeframe</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={timeframe}
        label="Timeframe"
        onChange={handleChange}
      >
        {timeframes.map((item) => (
          <MenuItem value={item.value} key={item.name}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
