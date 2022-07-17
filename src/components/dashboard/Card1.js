import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import Typography from '@mui/material/Typography';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBtc } from '@fortawesome/free-brands-svg-icons'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function createData( pair,price, hour, volume) {
  return { pair, price, hour, volume };
}

const rows = [
  createData('XTZUSD', 12, 6.0, 2400000),
  createData('ADAUSD', 1.234, 9.0, 370000000),
  createData('ETHUSD', 2.912, 16.0, 2400000),
  createData('LINKUSD', 305, 3.7, 60700000),
];

// console.log(rows);

function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "K", "M", "B","T"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}

export default function Topcoin() {
  const theme = useTheme();
  const tHeadColor = (theme.palette.mode == 'dark') ? "#182F4B" : "grey";
  return (
    <>
      <Container>
        <Grid container>
          <TableContainer component={Paper} sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom sx={{ textAlign:"center" }}>
              <FontAwesomeIcon icon={faBtc} style={{ marginRight: 8 }} />
              TOP BULL COINS
            </Typography>
              <Table aria-label="simple table">
                <TableHead style={{ background: tHeadColor }}>
                  <TableRow>
                    <TableCell sx={{color:"warning", borderBottom:""}}>Pair</TableCell>
                    <TableCell style={{color:"primary", borderBottom:""}}>Price</TableCell>
                    <TableCell style={{color:"primary", borderBottom:""}}>%24HR</TableCell>
                    <TableCell style={{color:"primary", borderBottom:""}}>Volume</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.pair}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Grid container direction="row" alignItems="center">
                          <Grid item xs={5}>
                            <Avatar src="/images/ada.png" />
                          </Grid>
                          <Grid item xs={7}>
                            {row.pair}
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell style={{color:"primary"}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <AttachMoneyIcon fontSize="small" />
                            <span>{row.price}</span>
                        </div>
                      </TableCell>
                      <TableCell style={{color:"primary",}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            color: row.pair == 'ADAUSD' ? 'red': 'green'
                        }}>
                            <span>{row.hour}%</span>
                            <ArrowUpwardIcon fontSize="small" />
                        </div>
                      </TableCell>
                      <TableCell style={{color:"primary",}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <AttachMoneyIcon fontSize="small" />
                            <span>{abbreviateNumber(row.volume)}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </Grid>
      </Container>
    </>
  );
}
