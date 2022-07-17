import * as React from 'react';
import { useSelector } from 'react-redux'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Dashboard, Settings, Person,InfoIcon } from '@mui/icons-material';
import PairMenu from '@/src/components/dashboard/pair-menu';
import Exchange from '@/src/components/dashboard/exchange';
import MainTabs from '@/src/components/dashboard/main-tabs';
import SelectMA from '@/src/components/dashboard/select-ma-type';
import SelectLength1 from '@/src/components/dashboard/select-length-1';
import SelectLength2 from '@/src/components/dashboard/select-length-2';

import Scannertable from './Scannertable';


function IndicatorSettings({ selectedMainTab }) {
  if (selectedMainTab === 'Price To MA') {
    return (
      <Paper>
        <Box sx={{border: 0, ml: 1, textAlign: 'left'}}>
          <SelectMA />
          <SelectLength1 />
          <SelectLength2 />
        </Box>
      </Paper>
    );
  } else if (selectedMainTab === 'MA Cross') {
    return (
      <Paper>
        <Box sx={{border: 0, ml: 1, textAlign: 'left'}}>
          <SelectMA />
          <SelectLength1 />
          <SelectLength2 />
        </Box>
      </Paper>
    )
  }
  return <></>;
}


export default function IconTabs() {
  const selectedMainTab = useSelector((state) => state.selectedMainTab.value);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(selectedMainTab);

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Box sx={{border: 0, ml: 1}}>
          <Button variant="outlined" startIcon={<Dashboard />} sx={{ marginRight: 3, width: 144 }} endIcon={<InfoIcon />}>
            Standahhhhrd
          </Button>
          <Button variant="outlined" startIcon={<Settings />} sx={{ marginRight: 3, width: 144 }} endIcon={<InfoIcon />}>
            Customize
          </Button>
          <Button variant="outlined" startIcon={<Person />} sx={{ marginRight: 3, width: 144 }} endIcon={<InfoIcon />}>
            Profile
          </Button>
        </Box>
      </Grid>
      
      <Grid item xs={12}>
        <h2>selectedMainTab</h2>
        <Box sx={{border: 0, ml: 1, textAlign: 'right'}}>
          <Paper>
            <PairMenu />
            <Exchange />
            <MainTabs />
          </Paper>
          <IndicatorSettings selectedMainTab={selectedMainTab} />
          <Scannertable />
        </Box>
      </Grid>
    </Grid>
  );
}
