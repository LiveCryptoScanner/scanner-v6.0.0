import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Box, Typography, Item } from '@mui/material';
import Stack from '@mui/material/Stack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowRight } from '@mui/icons-material';
import { ArrowLeft } from '@mui/icons-material';
import { useTheme, } from '@mui/material/styles';



const NewsHeadline = (props) => {
  const theme = useTheme();
  const tHeadColor = (theme.palette.mode == 'dark') ? "#132235" : "white";
  return (
    <Box>
      <Paper style={{ background: tHeadColor }}>
      <div style={{ display: 'flex', padding:"1rem", margin:" 0.5rem 0rem"}}>
      <ArrowLeft />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        style={{margin:'0px 20px 0px 0px'}}
      >
  
      <Typography>
        ETHUSD gained <span style={{color:"#81c784"}}>45% <ArrowUpwardIcon fontSize="x-small" /></span> since last signal
      </Typography>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        style={{margin:'0px 20px 0px 0px'}}
      >
      <Typography>
      BTCUSD increased by <span style={{color:"#f44336"}}>21% <ArrowDownwardIcon fontSize="x-small" /></span> in price since last signal
      </Typography>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        style={{margin:'0px 20px 0px 0px'}}
      >
      <Typography>ETHUSD gained <span style={{color:"#f44336"}}>21% <ArrowDownwardIcon fontSize="x-small" /></span> since last signal
      </Typography>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        style={{margin:'0px 20px 0px 0px'}}
      >
  
      <Typography>
        ETHUSD gained <span style={{color:"#81c784"}}>45% <ArrowUpwardIcon fontSize="x-small" /></span> since last signal
      </Typography>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        style={{margin:'0px 20px 0px 0px'}}
      >
      <Typography>
      BTCUSD increased by <span style={{color:"#81c784"}}>21% <ArrowUpwardIcon fontSize="x-small" /></span> in price since last signal
      </Typography>
     
      </Stack>
      <ArrowRight />
    </div>

      </Paper>
    </Box>
  )
}

export default NewsHeadline;
