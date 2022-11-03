import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableWrapper from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Grid, IconButton, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

interface Props {
  Header: React.ReactNode;
  Body: React.ReactNode;
}
const TableContainer: React.FC<Props> = ({ Header, Body }) => (
  <TableWrapper component={Paper}>
    <Grid container sx={{ padding: '15px' }} alignItems="center">
      <Grid item lg={11.5} xs={10} sm={11}>
        <TextField label="Search" placeholder="Search..." variant="outlined" />
      </Grid>
      <Grid item alignSelf="right">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
      <TableHead sx={{ background: 'rgb(244 246 248)' }}>{Header}</TableHead>
      <TableBody>{Body}</TableBody>
    </Table>
  </TableWrapper>
);

export default TableContainer;
