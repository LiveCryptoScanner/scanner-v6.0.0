import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card1 from '@/src/components/dashboard/Card1';
import Card2 from '@/src/components/dashboard/Card2';
import Card3 from '@/src/components/dashboard/Card3';

import Posts from '@/src/features/posts/Posts';

import TopBullCoins from '@/src/features/top-bull-coins/topBullCoins';
import TopSignal from '@/src/features/top-bull-coins/TopSignal';
import TopBullCoinsAsync from '@/src/features/top-bull-coins/topBullCoinsAsync';
import { getTopBullCoinsAsync } from '@/src/features/top-bull-coins/topBullCoinsAsyncSlice';


import TrendingCoinsAsync from '@/src/features/trending-coins/trendingCoinsAsync';
import { getTrendingCoinsAsync } from '@/src/features/trending-coins/trendingCoinsAsyncSlice';
import { useTheme, } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//   // backgroundColor: theme.palette.mode === 'dark' ? '' : '',
//   // ...theme.typography.body2,
//   // padding: theme.spacing(0),
//   // textAlign: 'center',
//   // color: theme.palette.text.secondary,
// }));

export default function HomeRow1() {
  const theme = useTheme();
  const tHeadColor = (theme.palette.mode == 'dark') ? "#132235" : "white";
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getTrendingCoinsAsync());
    dispatch(getTopBullCoinsAsync());
  }, [dispatch]);

  return (
    <Box sx={{ mt:0.2, mb: 1.2}}>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} md={6} lg={4} sx={{ border: 0 }}>
          <TopBullCoinsAsync style={{ background: tHeadColor }} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TrendingCoinsAsync />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TopSignal/>
        </Grid>
      </Grid>
    </Box>
  );
}
