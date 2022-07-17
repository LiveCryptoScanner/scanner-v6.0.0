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
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


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
  const tBackColor = (theme.palette.mode == 'dark') ? "#132235" : "white";
  return (
    <>
    <Box>
      <Card sx={{p: 0, pt: 1,background: tBackColor}}>
        <CardContent sx={{ p: 0, px: 2 }}>
          <TableContainer component={Paper} sx={{ mx: 0, p: 0, border: 0 }}>
            <Typography variant="subtitle1" gutterBottom sx={{ textAlign:"center",background:tBackColor, marginBottom:"0px",paddingBottom:"6px"}}>
              <FontAwesomeIcon icon={faBtc} style={{ marginRight: 8 }} />
              TOP BULL COINS
            </Typography>
            <Table aria-label="simple table" sx={{background:tBackColor}}>
              <TableHead sx={{ background: tHeadColor}}>
                <TableRow>
                  <TableCell padding="none" sx={{ p: 1, textAlign: 'left',marginLeft:"20px" }}>
                    <Typography sx={{marginLeft:"20px"}}>
                      PAIR
                    </Typography>
                  </TableCell>
                  <TableCell padding="none">
                    <Typography sx={{}}>
                      PRICE
                    </Typography>
                  </TableCell>
                  <TableCell padding="none">
                    <Typography sx={{}}>
                      %24HR
                    </Typography>
                  </TableCell>
                  <TableCell padding="none">
                    <Typography sx={{}}>
                      VOLUME
                    </Typography>
                  </TableCell>
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
                      <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={0.3} sx={{padding: 1}}>
                        <Avatar src="/images/ada.png" sx={{ width: 26, height: 26 }} />
                        <Typography variant="inherit" ml={ 0 }>
                          {row.pair}
                        </Typography>
                      </Stack>
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
        </CardContent>
        <CardActions sx={{justifyContent: 'flex-end'}}>
          <Button size="small" endIcon={<ArrowForwardIosIcon fontSize="small" />}>Details</Button>
        </CardActions>
      </Card>
    </Box>
    </>
  );
}

export default TopBullCoins;
