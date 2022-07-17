import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { Dashboard, Settings, Person, } from '@mui/icons-material';
import { Info } from '@mui/icons-material';
import RadarOutlinedIcon from '@mui/icons-material/RadarOutlined';
import PairMenu from '@/src/components/dashboard/pair-menu';
import Exchange from '@/src/components/dashboard/exchange';
import MainTabs from '@/src/components/dashboard/main-tabs';
import SelectMA from '@/src/components/dashboard/select-ma-type';
import SelectLength1 from '@/src/components/dashboard/select-length-1';
import SelectLength2 from '@/src/components/dashboard/select-length-2';
import Profile from './Profile';
import Scannertable from './Scannertable';
import { setMainHomeButton } from '@/src/features/mainHomeButtonSlice';
import { selectedMainTab } from '@/src/features/selected-main-tab/selectedMainTabSlice';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CustomizeFilter from './CustomizeFilter';
import FilterListIcon from '@mui/icons-material/FilterList';
import LaggingFull from '@/src/components/dashboard/LaggingFull';
import { useTheme, } from '@mui/material/styles';

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




function IndicatorSettings({ selectedMainTab }) {
  if (selectedMainTab === 'Price To MA') {
    return (
      <Paper>
        <Box sx={{border: 0, ml: 1, textAlign: 'left'}}>
          <SelectMA />
          <SelectLength1 />
        </Box>
      </Paper>
    );
  } else if (selectedMainTab === 'MA Cross') {
    return (
      <Paper>
        <Box sx={{border: 0, ml: 1, textAlign: 'left'}}>
          <SelectMA />
          <SelectLength1 />
        </Box>
      </Paper>
    )
  }
  else if (selectedMainTab === 'FSR') {
    return (
      <Paper>
        <Box sx={{border: 0, ml: 1, textAlign: 'left'}}>
        <SelectLength2/>
        </Box>
      </Paper>
    )
  }
  return <></>;
}

function HomeSteppersView({ selectedMainHomeButton }) {
  if (selectedMainHomeButton.value === 'Standard') {
    return (
      <Box sx={{p:2,m:1}} >
        <Grid container direction="row"  spacing={2} >
        {/* <Grid item xs={2} md={1} style={{display:'flex',alignItems:'center', height:'50px'}}>
        <Box sx={{border: 0, ml: 0}}>
          <Box component="span">
            <Typography variant="h5" component="overline">
            <RadarOutlinedIcon /> Scanner
            </Typography>
          </Box>
        </Box>
      </Grid> */}
          <Grid item xs={12} md={7}>
            <MainTabs />
          </Grid>
          <Grid item xs={3} md={2} sx={{ mt:1.2,}}>                
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
          <Grid item xs={12} md={3}>      
            <Grid container direction="row">
              <Grid item xs={3} md={4}>
                <PairMenu />
              </Grid>
              <Grid item xs={3} md={4}>
                <Exchange />
              </Grid>
              <Grid item xs={2} md={4} style={{display:"flex"}}>
              <IconButton><FilterListIcon /></IconButton>
                <IconButton><DownloadIcon /></IconButton>
                <IconButton><ShareIcon /></IconButton>
              </Grid>
            </Grid>
           
          </Grid>
        </Grid>
      </Box>
    );
  } else if (selectedMainHomeButton.value === 'Customize') {
    return (
      <Box sx={{border: 0, ml: 1, mt: 1}}>
        <Paper>
          <Grid>
          <CustomizeFilter />
          </Grid>
        </Paper>
      </Box>
    )
  } else if (selectedMainHomeButton.value === 'Profile') {
    return (
      <Box sx={{border: 0, ml: 1, mt: 1}}>
        <Paper>
          <Profile />
        </Paper>
      </Box>
    )
  }
  return <></>;
}


export default function IconTabs() {
  const theme = useTheme();
  const tHeadColor = (theme.palette.mode == 'dark') ? "#132235" : "white";
  const dispatch = useDispatch();
  const selectedMainHomeButton = useSelector((state) => state.mainHomeButton.selectedMainHomeButton);
  const selectedMainTab = useSelector((state) => state.selectedMainTab.value);
  const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // console.log(selectedMainTab);

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={1}>
        <Box sx={{border: 0, ml: 0}}>
          <Box component="span">
            <Typography variant="h5" component="overline" sx={{display: 'flex',marginTop: '4px',marginLeft:'10px'}}>
            <RadarOutlinedIcon sx={{marginTop:'3px'}}/> Scanner
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={11}>
        <Box sx={{border: 0, ml: 0}}>
          <Button variant={selectedMainHomeButton.value === 'Standard' ? 'contained' : 'outlined'} startIcon={<Dashboard />} endIcon={<Info />} sx={{ marginRight: 2, marginLeft: 4, width: 124 }}
            onClick={() => dispatch(setMainHomeButton( {name: 'Standard', value: 'Standard'} ))} >
            Standard
          </Button>
          <Button variant={selectedMainHomeButton.value === 'Customize' ? 'contained' : 'outlined'} startIcon={<Settings />} endIcon={<Info />} sx={{ marginRight: 3, width: 124 }}
            onClick={() => dispatch(setMainHomeButton( {name: 'Customize', value: 'Customize'} ))}>
            Customize
          </Button>
          <Button variant={selectedMainHomeButton.value === 'Profile' ? 'contained' : 'outlined'} startIcon={<Person />} endIcon={<Info />} sx={{ marginRight: 3, width: 124 }}
            onClick={() => dispatch(setMainHomeButton( {name: 'Profile', value: 'Profile'} ))}>
            Profile
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container style={{ background: tHeadColor }}>
          <Grid item xs={12} style={{ background: tHeadColor }}>
            <Paper style={{ background: tHeadColor }}><HomeSteppersView selectedMainHomeButton={selectedMainHomeButton} style={{ background: tHeadColor }}/></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ background: tHeadColor }}>
              {selectedMainHomeButton.value === 'Standard' ? <IndicatorSettings selectedMainTab={selectedMainTab} /> : (<div></div>)}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ background: tHeadColor }}>
              {selectedMainHomeButton.value === 'Standard' ? (<Box><Scannertable /></Box>) : (<div></div>)}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
