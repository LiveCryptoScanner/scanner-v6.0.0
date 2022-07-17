import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './selectedMainTabSlice'

import { Grid, Paper, Button } from '@mui/material';

import { setSelectedMainTab } from './selectedMainTabSlice';
import MainTabs from '@/src/components/dashboard/main-tabs';

// const handleClick = (tab, event) => {
//   event.preventDefault();
//   console.log(event);
//   // setSelectedMainTab('MA');
//   dispatch(setSelectedMainTab('MA'))
//   console.log('Done');
// };

const selectedMainTab = () => {
  const selectedMainTab = useSelector((state) => state.selectedMainTab.value);
  const dispatch = useDispatch();

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Paper>
          <h2>Selected Main Tab Page</h2>
          <h2>Selected Main Tab Page Value: {selectedMainTab}</h2>
        </Paper>
        {/*<Paper>
          <MainTabs />
        </Paper>*/}
        <Paper>
          Test Button Functionality: <Button variant="outlined" onClick={(e) => dispatch(setSelectedMainTab({newTab: 'MA'}, e))}>Test</Button>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default selectedMainTab;
