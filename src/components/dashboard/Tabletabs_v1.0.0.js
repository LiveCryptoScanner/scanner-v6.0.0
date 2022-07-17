import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import PhoneIcon from '@mui/icons-material/Phone';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PersonPinIcon from '@mui/icons-material/PersonPin';
// import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import { Dashboard, Settings, Person } from '@mui/icons-material';


export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Grid item xs={12}>
        <Box sx={{border: 1}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
          >
            <Tab icon={<Dashboard />} className="button" iconPosition="start" label="Standard" />
            <Tab icon={<Settings />} iconPosition="start" label="Customize" />
            <Tab icon={<Person />} iconPosition="start" label="Profile" />
          </Tabs>
        </Box>
      </Grid>
    </Grid>
  );
}
