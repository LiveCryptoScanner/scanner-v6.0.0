import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { setExchange } from '@/src/features/standard/standardSlice';

export default function SelectVariants() {
  const { exchanges, exchange } = useSelector((state) => state.standard);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setExchange(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: '92%' }} size="small">
      <InputLabel id="demo-simple-select-helper-label">Exchange</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={exchange}
        label="Exchange"
        onChange={handleChange}
      >
        {exchanges.map((item) => (
          <MenuItem value={item.value} key={item.name}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
