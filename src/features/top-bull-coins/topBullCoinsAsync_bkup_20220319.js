import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
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
      <Grid item xs={12} sx={{p: 1}}>
        <TableContainer component={Paper} sx={{ mx: 0, p: 1, border: 0 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ textAlign:"center" }}>
          <FontAwesomeIcon icon={faBtc} style={{ marginRight: 8 }} />
          TOP BULL COINS
        </Typography>
          <Table aria-label="simple table">
            <TableHead sx={{ background: tHeadColor, border: 0}}>
              <TableRow>
                <TableCell padding="none" sx={{ textAlign: 'left', p: 1}}>
                  <Box component="span" ml={3}>PAIR</Box>
                </TableCell>
                <TableCell padding="none">PRICE</TableCell>
                <TableCell padding="none">%24HR</TableCell>
                <TableCell padding="none">VOLUME</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.pair}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  justify="center"
                >
                  <TableCell padding="none">
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', flexWrap: 'wrap', p: 1 }}>
                      <Avatar
                        src="/images/ada.png"
                        sx={{ width: 26, height: 26 }}
                      />
                      <Typography variant="inherit" ml={ 0 }>
                        {row.pair}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell padding="none">
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <AttachMoneyIcon fontSize="small" />
                      <Typography variant="inherit" sx={{ mt: 0.3 }}>
                        {row.price}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell padding="none" align="center">
                    <Box component="span"
                      color={ row.hour > 0 ? theme.palette.success.light : row.hour < 0 ? theme.palette.error.main : theme.palette.secondary.light }
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}>
                      <Typography variant="inherit" sx={{textAlign: 'center', mt: 0.3}}>
                        {row.hour}%
                      </Typography>

                      {row.hour > 0  ? (<ArrowUpwardOutlinedIcon fontSize="small" />) :
                        row.hour < 0 ? (<ArrowDownwardOutlinedIcon fontSize="small" />) :
                        (<span></span>)
                      }
                    </Box>
                  </TableCell>
                  <TableCell padding="none">
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <AttachMoneyIcon fontSize="small" />
                      <Typography variant="inherit" sx={{ mt: 0.3 }}>
                        {abbreviateNumber(row.volume)}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    </>
  );
}

export default TopBullCoins;
