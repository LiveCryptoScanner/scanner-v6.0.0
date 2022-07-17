import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { setLength1 } from '@/src/features/standard/priceToMaIndicatorSlice';

export default function SelectVariants() {
  const { length1Values, length1 } = useSelector((state) => state.priceToMaIndicator);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setLength1(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-helper-label">Length</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={length1}
        label="Length 1"
        onChange={handleChange}
      >
        {length1Values.map(item => (
          <MenuItem value={item.value} key={item.name}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
