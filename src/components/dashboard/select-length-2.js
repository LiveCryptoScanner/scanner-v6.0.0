import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { setLength2 } from '@/src/features/standard/priceToMaIndicatorSlice';

export default function SelectVariants() {
  const { length2Values, length2 } = useSelector((state) => state.priceToMaIndicator);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setLength2(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-helper-label">FSR Type</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={length2}
        label="Length 2"
        onChange={handleChange}
      >
        {length2Values.map(item => (
          <MenuItem value={item.value} key={item.name}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
