import * as React from 'react';
import { Box, Button, Typography, Paper, Grid, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import PairMenu from '@/src/components/dashboard/pair-menu';
import Exchange from '@/src/components/dashboard/exchange';
import Timeframe from '@/src/components/dashboard/Timeframe';
import LaggingFull from '@/src/components/dashboard/LaggingFull';
import Trend from '@/src/components/dashboard/Trend';
import Macd from '@/src/components/dashboard/Macd'
import Stochasticfilter from '@/src/components/dashboard/Stochasticfilter';
import FsrFilter from './FsrFilter';
import RsiFilter from './RsiFilter';
import LeadingfullFilter from './Leadingfullfilter';
import LaggingfullFilter from './Laggingfullfilter';
import Volumefilter from './Volumefilter';
import Hourch from './24hrfilter';
import Marketcapfilter from './Marketcapfilter';
import PricemovingAverageFilter from './PricemovingFilter';
import MovingAverageFilter from './MovingFilter';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useTheme, } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  card: {
    borderRadius:"6px",
    border:"1px solid #595555",    padding: "0px 24px 0px 10px",
  },
});

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const tHeadColor = (theme.palette.mode == 'dark') ? "#132235" : "white";
  return (
    <Box style={{ background: tHeadColor }}>
      <Grid item xs={6} md={12} sx={{ textAlign: 'end', padding: '20px 20px 0px 0px' }}>
        <Button variant="contained"><FilterAltIcon />Reset Filter</Button>
      </Grid>
      <Paper style={{ background: tHeadColor }}>
        <Grid container spacing={2} sx={{ mt: 2, mb: 3 }}>
          {/* General Filter */}
          <Grid item xs={6} md={5}>
            <h3>General Filter</h3>
            <div className={classes.card}>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6} md={4}>
                <Exchange />
              </Grid>
              <Grid item xs={6} md={4}>
                <PairMenu />
              </Grid>
              <Grid item xs={6} md={4}>
                <Timeframe />
              </Grid>
            </Grid>
            {/* 2nd section */}
            <Grid container spacing={2} sx={{ mt: 1, mb: 3 }}>
              <Grid item xs={6} md={12}>
                <Volumefilter />
              </Grid>
              <Grid item xs={6} md={12}>
                <Marketcapfilter />
              </Grid>
              <Grid item xs={6} md={12}>
                <Hourch />
              </Grid>
            </Grid>
            </div>
          </Grid>
          {/* Indicator Filter */}
          <Grid item xs={6} md={7}>
            <h3>Indicator Filter</h3>
            <div className={classes.card}>
            <Grid container spacing={2} sx={{ mt: 2, }}>
              <Grid item xs={6} md={6}>
                <FsrFilter />
              </Grid>
              <Grid item xs={6} md={6}>
                <RsiFilter />
              </Grid>
              <Grid item xs={6} md={6} sx={{mt:1}}>
                <LeadingfullFilter />
              </Grid>
              <Grid item xs={6} md={6} sx={{mt:1}}>
                <LaggingfullFilter />
              </Grid>
            </Grid>
            {/* 3rd section */}
            <Grid container spacing={2} sx={{ mt: 1, }}>
              <Grid item xs={6} md={3}>
                <LaggingFull />
              </Grid>
              <Grid item xs={6} md={3}>
                <Stochasticfilter />
              </Grid>
              <Grid item xs={6} md={3}>
                <Trend/>
              </Grid>
              <Grid item xs={6} md={3}>
                <Macd/>
              </Grid>
            </Grid>
            {/* 4th section */}
            <Grid container spacing={2} sx={{ mt: 1, mb: 3 }}>
              <Grid item xs={6} md={12}>
                <PricemovingAverageFilter />
              </Grid>
              <Grid item xs={6} md={12}>
                <MovingAverageFilter />
              </Grid>
            </Grid>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Grid item xs={6} md={12} sx={{ display: 'flex', padding: '20px', justifyContent: 'end' }}>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="Above" control={<Radio />} label="Remember me" />
        </RadioGroup>
        <Button variant="contained"><FilterAltIcon />Apply Filter</Button>
      </Grid>
    </Box>
  );
}
