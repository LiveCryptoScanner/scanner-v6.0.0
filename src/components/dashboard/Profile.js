import * as React from 'react';
import { Box, Button, Typography, Paper, Grid, Radio, RadioGroup, FormControlLabel} from '@mui/material';
import { styled,alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SortBy from '@/src/components/dashboard/SortBy'
import ButtonGroup from '@mui/material/ButtonGroup';
import Allprofile from './Allprofile';
import { useTheme, } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      marginTop: "9px",
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
export default function Profile() {
  const theme = useTheme();
  const tHeadColor = (theme.palette.mode == 'dark') ? "#132235" : "white";
  return (
    <Box>
    <Paper style={{ background: tHeadColor }}>
    <Grid container spacing={2} sx={{ mt:1}}>
        <Grid item xs={6} md={3}>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Grid>
        <Grid item xs={6} md={6} sx={{    marginTop: "8px",textAlign: "center"}}>
        <ButtonGroup aria-label="outlined primary button group" size="large" sx={{width:"55%"}}>
      <Button sx={{width:"100%"}} variant="contained">All Profiles</Button>
      <Button sx={{width:"100%"}} variant="outlined">Favourite <StarIcon /></Button>
    </ButtonGroup>
        </Grid>
        <Grid item xs={6} md={3}>
          <SortBy />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt:2, mb: 3, p:2}}>
        <Grid item xs={6} md={12}>
        <Grid container spacing={2}>
        <Grid item xs={6} md={3} lg={2}>
        <Allprofile />
            </Grid>
            <Grid item xs={6} md={3} lg={2}>
        <Allprofile />
            </Grid>
            <Grid item xs={6} md={3} lg={2}>
        <Allprofile />
            </Grid>
            <Grid item xs={6} md={3} lg={2}>
        <Allprofile />
            </Grid>
            <Grid item xs={6} md={3} lg={2}>
        <Allprofile />
            </Grid>
            <Grid item xs={6} md={3} lg={2}>
        <Allprofile />
            </Grid>
        </Grid>

        </Grid>
      </Grid>
    </Paper>
  </Box>
  );
}
