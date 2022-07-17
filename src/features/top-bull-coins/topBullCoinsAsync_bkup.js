import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBtc } from '@fortawesome/free-brands-svg-icons'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';


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

const TopBullCoins = () => {
  const theme = useTheme();
  const rows = useSelector((state) => state.topBullCoinsAsync.entities);
  const status = useSelector((state) => state.topBullCoinsAsync.status);
  const tHeadColor = (theme.palette.mode == 'dark') ? "#182F4B" : "blue";

  return (
    <>
    <Grid container>
    <TableContainer component={Paper} sx={{ m: 1, pt: 2, px: 1 }}>
    <Typography variant="subtitle2" component="div" gutterBottom sx={{ textAlign:"center" }}>
      <FontAwesomeIcon icon={faBtc} style={{ marginRight: 8 }} />
      TOP BULL COINS
    </Typography>
      <Table aria-label="simple table">
        <TableHead style={{ background: tHeadColor }}>
          <TableRow>
            <TableCell sx={{ textAlign: 'center' }}>Pair</TableCell>
            <TableCell style={{}}>Price</TableCell>
            <TableCell style={{}}>%24HR</TableCell>
            <TableCell style={{}}>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.pair}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              justify="center"
            >
              <TableCell>
                <Stack direction="row" spacing={0.8} justify="center" alignItems="center">
                <Avatar
                    src="/images/ada.png"
                    sx={{ width: 26, height: 26 }}
                  />
                <Typography variant="overline" mt={0}>
                    {row.pair}
                  </Typography>
                </Stack>
              </TableCell>

              <TableCell>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'noWrap',
                }}>
                    <AttachMoneyIcon fontSize="x-small" />
                    <Typography variant="overline">
                      {row.price}
                    </Typography>
                </div>
              </TableCell>
              <TableCell style={{color:"primary",}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'noWrap',
                    color: row.hour > 0  ? 'green': row.hour < 0 ? 'red' : 'gray'
                }}>
                    <Typography variant="overline" sx={{textAlign: 'center'}}>
                      {row.hour}%
                    </Typography>

                      {row.hour > 0  ? (<ArrowUpwardOutlinedIcon fontSize="x-small" />) :
                        row.hour < 0 ? (<ArrowDownwardOutlinedIcon fontSize="x-small" />) :
                        (<span></span>)
                      }

                </div>
              </TableCell>
              <TableCell style={{color:"primary",}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'noWrap',
                }}>
                    <AttachMoneyIcon fontSize="x-small" />
                    <Typography variant="overline">
                      {abbreviateNumber(row.volume)}
                    </Typography>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </>
  );
}

export default TopBullCoins;
