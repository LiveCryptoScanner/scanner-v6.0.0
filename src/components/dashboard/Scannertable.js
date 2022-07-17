import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';
import Paper from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { DataGrid } from '@mui/x-data-grid';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import StarRateIcon from '@mui/icons-material/StarRate';
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIcon from '@mui/material/SvgIcon';

const columns = [
  { field: 'WatchList',
    headerName: '.',
    sortable: false,
    width: 50,
    headerClassName:'watchlist-cell',
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => {
      return (
        <>
          {!params.value.inWatchList ? (<StarPurple500Icon color="none" sx={{ cursor: 'pointer' }} />) : (<StarRateIcon color="warning" sx={{ cursor: 'pointer' }} />)}
        </>
      );
    }},
  { field: 'Pair', headerName: 'Pair', minWidth: 180, headerAlign: 'left',
    headerClassName: 'pair-header-cell',
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.value.imgPath}
            sx={{ width: 21, height: 21, mr: 1 }}
          />
          <Typography>
            {params.value.name}
          </Typography>
        </>
      );
    }},
  // { field: 'Pair', headerName: 'Pair', width: 90,headerClassName:'tableheader'},
  { field: 'M15', headerName: 'M15', minWidth: 80, headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1},
  { field: 'H1', headerName: 'H1', minWidth: 80,headerClassName:'tableheader', headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1},
  { field: 'H4', headerName: 'H4', minWidth: 80, headerClassName:'tableheader', headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1},
  { field: 'H12', headerName: 'H12', minWidth: 80,headerClassName:'tableheader', headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1},
  { field: 'D', headerName: 'D', minWidth: 80,headerClassName:'tableheader', headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1},
  { field: 'W', headerName: 'W', minWidth: 80,headerClassName:'tableheader', headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1},
  { field: 'Price', headerName: 'Price', minWidth: 110,headerClassName:'tableheader', headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1},
  { field: '_24Hr', headerName: '%24Hr', minWidth: 110,headerClassName:'tableheader', headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1},
  { field: 'Volume', headerName: 'Volume', minWidth: 110,headerClassName:'tableheader', headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1},
  // { field: 'Chart', headerName: 'Chart', width: 110,headerClassName:'tableheader', headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1, sortable: false},

  { field: 'Chart', headerName: 'Chart', minWidth: 110, headerAlign: 'center',
    headerClassName: 'pair-header-cell', flex: 1, sortable: false, align: 'center',
    renderCell: (params) => {
      return (
        <>
          <a href={params.value.url} target="_blank">
            <Avatar src={params.value.imagePath}
              sx={{ width: 21, height: 21, mr: 1 }}
            />
          </a>
         </>
      );
    }},
    { field: 'Filter', headerName: 'Filter', minWidth: 110, headerAlign: 'center',
      headerClassName: 'pair-header-cell', flex: 1, sortable: false, align: 'center',
      renderCell: (params) => {
        return (
          <>
            <Link color="inherit" underline="none" href={params.value.url} target="_blank">
              <Button variant="outlined" size="small">
                Trade
              </Button>
            </Link>
           </>
        );
      }},
  // { field: 'Filter', headerName: 'Filter', width: 120,headerClassName:'tableheader', headerClassName:'tableheader', align: 'center', headerAlign: 'center', flex: 1, sortable: false},
];

// const rows = [
//   // { Pair: 1, M15: <ArrowDropUpIcon />, H1: 'Jon', H4: 35, H12: 1, D: 'Snow', W: 'Jon', Price: "$35", id: 1, Volume: 'Snow', Chart: 'Jon', M16: 35 },
//   // { Pair: 1, M15: 99, H1: 'Jon', H4: 35, H12: 1, D: 'Snow', W: 'Jon', Price: "$35", id: 1, Volume: 'Snow', Chart: 'Jon', M16: 35 },
//   { id: 1, Pair: { name: 'BTCUSD', imgPath: '/images/eth.png', inWatchList: true }, M15: 99, H1: '23', H4: 35, H12: 16, D: '55', W: '23', Price: "$35", _24Hr: 1, Volume: '4.3M', Chart: 'trading_view_chart' },
//   { id: 2, Pair: { name: 'ADAUSD', imgPath: '/images/eth.png', inWatchList: false }, M15: 42, H1: '55', H4: 35, H12: 11, D: '55', W: '23', Price: "$35", _24Hr: 1, Volume: '4.3M', Chart: 'trading_view_chart' },
//   { id: 3, Pair: { name: 'XRPUSD', imgPath: '/images/eth.png', inWatchList: false }, M15: 12, H1: '25', H4: 35, H12: 53, D: '55', W: '23', Price: "$35", _24Hr: 1, Volume: '4.3M', Chart: 'trading_view_chart' },
//   { id: 4, Pair: { name: 'KNCUSD', imgPath: '/images/eth.png', inWatchList: true }, M15: 63, H1: '62', H4: 35, H12: 66, D: '55', W: '23', Price: "$35", _24Hr: 1, Volume: '4.3M', Chart: 'trading_view_chart' },
//   { id: 5, Pair: { name: 'SHIBUSDTPERP', imgPath: '/images/eth.png', inWatchList: false }, M15: 25, H1: '84', H4: 35, H12: 85, D: '55', W: '23', Price: "$35", _24Hr: 1, Volume: '4.3M', Chart: 'trading_view_chart' },
// ];

const rows = [
  // { Pair: 1, M15: <ArrowDropUpIcon />, H1: 'Jon', H4: 35, H12: 1, D: 'Snow', W: 'Jon', Price: "$35", id: 1, Volume: 'Snow', Chart: 'Jon', M16: 35 },
  // { Pair: 1, M15: 99, H1: 'Jon', H4: 35, H12: 1, D: 'Snow', W: 'Jon', Price: "$35", id: 1, Volume: 'Snow', Chart: 'Jon', M16: 35 },
  { id: 1, WatchList: { inWatchList: true }, Pair: { name: 'BTCUSD', imgPath: '/images/eth.png', inWatchList: true }, M15: 99, H1: '23', H4: 35, H12: 16, D: '55', W: '23', Price: "$35", _24Hr: 1, Volume: '4.3M', Chart: { imagePath: '/images/tv_logo_2.png', url: 'https://in.tradingview.com/chart/' }, Filter: {name: 'Trade', url: 'https://in.tradingview.com/chart/'} },
  { id: 2, WatchList: { inWatchList: false }, Pair: { name: 'ADAUSD', imgPath: '/images/eth.png', inWatchList: false }, M15: 42, H1: '55', H4: 35, H12: 11, D: '55', W: '23', Price: "$35", _24Hr: -10, Volume: '4.3M', Chart: { imagePath: '/images/tv_logo_2.png', url: 'https://in.tradingview.com/chart/' }, Filter: {name: 'Trade', url: 'https://in.tradingview.com/chart/'} },
  { id: 3, WatchList: { inWatchList: false }, Pair: { name: 'XRPUSD', imgPath: '/images/eth.png', inWatchList: false }, M15: 12, H1: '25', H4: 35, H12: 53, D: '55', W: '23', Price: "$35", _24Hr: 12, Volume: '4.3M', Chart: { imagePath: '/images/tv_logo_2.png', url: 'https://in.tradingview.com/chart/' }, Filter: {name: 'Trade', url: 'https://in.tradingview.com/chart/'} },
  { id: 4, WatchList: { inWatchList: false }, Pair: { name: 'KNCUSD', imgPath: '/images/eth.png', inWatchList: true }, M15: 63, H1: '62', H4: 35, H12: 66, D: '55', W: '23', Price: "$35", _24Hr: 0.06, Volume: '4.3M', Chart: { imagePath: '/images/tv_logo_2.png', url: 'https://in.tradingview.com/chart/' }, Filter: {name: 'Trade', url: 'https://in.tradingview.com/chart/'} },
  { id: 5, WatchList: { inWatchList: true }, Pair: { name: 'SHIBUSDTPERP', imgPath: '/images/eth.png', inWatchList: false }, M15: 25, H1: '84', H4: 35, H12: 85, D: '55', W: '23', Price: "$35", _24Hr: 1.74, Volume: '4.3M', Chart: { imagePath: '/images/tv_logo_2.png', url: 'https://in.tradingview.com/chart/' }, Filter: {name: 'Trade', url: 'https://in.tradingview.com/chart/'} },
];


// 'comfortable'
// | 'compact'
// | 'standard'

export default function ScannerDataTable() {
  return (
    <Box
     sx={{
       height: 400,
       width: 1,
       '& .tableheader': { backgroundColor: '#182F4B' },
       '& .pair-header-cell': { backgroundColor: '##182F4B', pl: 4 },
       '& .watchlist-cell': { backgroundColor: '#182F4B', opacity: '100' }
     }}
   >

     {/*<DataGrid
       rows={rows}
       columns={columns}
       pageSize={5}
       rowsPerPageOptions={[5]}
       density="compact"
       disableColumnMenu={true}
     />*/}

     <DataGrid
       rows={rows}
       columns={columns}
       pageSize={5}
       rowsPerPageOptions={[5]}
       density="compact"
       disableColumnMenu={true}
     />
     </Box>
  );
}
