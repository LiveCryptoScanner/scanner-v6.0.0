import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Trend" href="/trend" />
        <LinkTab label="Price To MA" href="/price-to-ma" />
        <LinkTab label="MA Cross" href="/ma-cross" />
        <LinkTab label="RSI" href="/rsi" />
        <LinkTab label="FSR" href="/fsr" />
        <LinkTab label="Stochastic" href="/stochastic" />
        <LinkTab label="MACD" href="/macd" />
      </Tabs>
    </Box>
  );
}
