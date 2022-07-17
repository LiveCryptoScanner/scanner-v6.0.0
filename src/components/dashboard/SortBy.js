import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setSortBy } from '@/src/features/standard/standardSlice';

export default function SelectVariants() {
  const { sortBy, sortby } = useSelector((state) => state.standard);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: '92%' }} size="small">
      <InputLabel id="demo-simple-select-helper-label">Sort By</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={sortBy}
        label="Sort By"
        onChange={handleChange}
      >
        {sortby.map((item) => (
          <MenuItem value={item.value} key={item.name}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
