import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Drawer, Typography } from '@mui/material';

import Counter from '@/src/features/counter/Counter'
import Posts from '@/src/features/posts/Posts'
import Navbar from './Navbar';

// import SelectedMainTab from '@/src/features/selected-main-tab/SelectedMainTab';

const Layout = () => {
  return (
    <>
      <Navbar />
    </>
  )
}

export default Layout;
