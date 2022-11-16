import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableWrapper from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Grid, IconButton, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import TableSkeletons from '../tableSkeletons/TableSkeletons';

interface Props {
  Header: React.ReactNode;
  Body: React.ReactNode;
  isLoading: boolean;
  isFilter?: boolean;
}
const TableContainer: React.FC<Props> = ({
  Header,
  Body,
  isLoading,
  isFilter,
}) =>
  isLoading ? (
    <TableWrapper component={Paper}>
      <Grid
        container
        sx={{ padding: '15px' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid>
          <TextField
            label="Search"
            placeholder="Search..."
            variant="outlined"
            sx={{ width: '250px' }}
            size="small"
          />
        </Grid>
        <Grid item alignSelf="right">
          {isFilter && (
            <IconButton color="primary">
              <FilterListIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead sx={(theme) => ({ background: theme.palette.grey[100] })}>
          {Header}
        </TableHead>
        <TableBody>{Body}</TableBody>
      </Table>
    </TableWrapper>
  ) : (
    <TableSkeletons />
  );

export default TableContainer;
