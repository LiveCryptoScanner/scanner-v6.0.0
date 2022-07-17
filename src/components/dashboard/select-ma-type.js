import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { setType } from '@/src/features/standard/priceToMaIndicatorSlice';

export default function SelectVariants() {
  const { types, type } = useSelector((state) => state.priceToMaIndicator);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setType(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-helper-label">MA Type</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={type}
        label="MA Type"
        onChange={handleChange}
      >

        {types.map(item => (
          <MenuItem value={item.value} key={item.name}>{item.name}</MenuItem>
        ))}

        {/*<MenuItem value="MA">MA</MenuItem>
        <MenuItem value="EMA">EMA</MenuItem>*/}
      </Select>
    </FormControl>
  );
}
