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

function createData( pair,price, hour, volume) {
  return { pair, price, hour, volume };
}

const rows = [
  createData('XTZUSD', 12, 6.0, 24),
  createData('ADAUSD', 1.234, 9.0, 37),
  createData('ETHUSD', 2.912, 16.0, 24),
  createData('LINKUSD', 305, 3.7, 67),
];

export default function Topcoin() {
  return (
    <>
      <Container>
        <Grid container>
          <TableContainer component={Paper} style={{ padding: "1rem" }}>
            {/* <h3 style={{margin:"0rem 0rem 1rem 0rem", textAlign:"center" }}><i className="fa-brands fa-btc"></i> TOP BULL COINS</h3> */}
            <typography variant="h3">
              <i className="fa-brands fa-btc"></i>
              TOP BULL COINS
            </typography>
              <Table aria-label="simple table">
                <TableHead style={{background:"#182F4B"}}>
                  <TableRow>
                    <TableCell style={{color:"#fff", borderBottom:"#182F4B"}}>Pair</TableCell>
                    <TableCell style={{color:"#fff",borderBottom:"#182F4B"}}>Price</TableCell>
                    <TableCell style={{color:"#fff",borderBottom:"#182F4B"}}>%24HR</TableCell>
                    <TableCell style={{color:"#fff",borderBottom:"#182F4B"}}>Volume</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.pair}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" style={{color:"#fff",borderBottom:"1px solid #182F4B"}}>
                        {row.pair}
                      </TableCell>
                      <TableCell style={{color:"#fff",borderBottom:" 1px solid #182F4B"}}>{row.price}</TableCell>
                      <TableCell style={{color:"#fff",borderBottom:"1px solid #182F4B"}}>{row.hour}</TableCell>
                      <TableCell style={{color:"#fff",borderBottom:"1px solid #182F4B"}}>{row.volume}</TableCell>
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
