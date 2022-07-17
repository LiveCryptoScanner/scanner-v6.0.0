import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const columns = [
  { field: 'Pair', headerName: 'Pair', width: 200,headerClassName:'tableheader'},
  { field: 'M15', headerName: 'M15', width: 140, headerClassName:'tableheader'},
  { field: 'H1', headerName: 'H1', width: 140,headerClassName:'tableheader'},
  { field: 'H4', headerName: 'H4', width: 140, headerClassName:'tableheader'},
  { field: 'H12', headerName: 'H12', width: 140,headerClassName:'tableheader'},
  { field: 'D', headerName: 'D', width: 140,headerClassName:'tableheader'},
  { field: 'W', headerName: 'W', width: 140,headerClassName:'tableheader'},
  { field: 'Price', headerName: 'Price', width: 200,headerClassName:'tableheader'},
  { field: '%24Hr', headerName: '%24Hr', width: 200,headerClassName:'tableheader'},
  { field: 'Volume', headerName: 'Volume', width: 200,headerClassName:'tableheader'},
  { field: 'Chart', headerName: 'Chart', width: 200,headerClassName:'tableheader'},
  { field: 'M16', headerName: 'M16', width: 200,headerClassName:'tableheader'},
];

const rows = [
  // { Pair: 1, M15: <ArrowDropUpIcon />, H1: 'Jon', H4: 35, H12: 1, D: 'Snow', W: 'Jon', Price: "$35", id: 1, Volume: 'Snow', Chart: 'Jon', M16: 35 },
  { Pair: 1, M15: 99, H1: 'Jon', H4: 35, H12: 1, D: 'Snow', W: 'Jon', Price: "$35", id: 1, Volume: 'Snow', Chart: 'Jon', M16: 35 },
];

// 'comfortable'
// | 'compact'
// | 'standard'

export default function ScannerDataTable() {
  return (
    <div>
     <Box
      sx={{
        height: 400,
        width: 1,
        '& .tableheader': {
          backgroundColor: '#000',
        },
      }}
    >
      <DataGrid
        rows={rows}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        density="compact"
        disableExtendRowFullWidth="true"
      />
      </Box>
    </div>
  );
}
