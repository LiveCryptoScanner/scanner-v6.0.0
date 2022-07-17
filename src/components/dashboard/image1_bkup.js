import * as React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import img1 from '../../public/images/Bg.png';
import img1 from '/public/images/Bg.png';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '' : '',
  // ...theme.typography.body2,
  // padding: theme.spacing(0),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  // return (
  //   <Box sx={[{ flexGrow: 1 }]}>
  //     <Grid>
  //       <Grid item xs={12} md={12} lg={12}>
  //         <Image src={img1} width={1500} />
  //       </Grid>
  //     </Grid>
  //   </Box>
  // );
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Paper>
            <Image src={img1} width="100%" />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
