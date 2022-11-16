import React from 'react';
import { Box, Grid, Skeleton, TableCell, TableRow } from '@mui/material';
import TableContainer from '../TableContainer/TableContainer';

const TableSkeletons = () => (
  <TableContainer
    isLoading
    Header={
      <TableRow>
        <TableCell>
          <Skeleton
            variant="rectangular"
            height={30}
            sx={{
              borderRadius: '5px',
              marginBottom: '2px',
            }}
          />
        </TableCell>
      </TableRow>
    }
    Body={
      <Box>
        <Grid
          sx={{
            height: '65px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: '15px',
            paddingLeft: '15px',
            borderBottom: '1px solid rgb(205 221 237)',
          }}
        >
          <Skeleton
            variant="rectangular"
            height="40%"
            width="8%"
            sx={{ borderRadius: '5px' }}
          />
          <Skeleton
            variant="rectangular"
            height="40%"
            width="70%"
            sx={{ borderRadius: '5px' }}
          />
          <Skeleton
            variant="rectangular"
            height="40%"
            width="8%"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
        <Grid
          sx={{
            height: '65px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: '15px',
            paddingLeft: '15px',
            borderBottom: '1px solid rgb(205 221 237)',
          }}
        >
          <Skeleton
            variant="rectangular"
            height="40%"
            width="8%"
            sx={{ borderRadius: '5px' }}
          />
          <Skeleton
            variant="rectangular"
            height="40%"
            width="70%"
            sx={{ borderRadius: '5px' }}
          />
          <Skeleton
            variant="rectangular"
            height="40%"
            width="8%"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
        <Grid
          sx={{
            height: '65px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: '15px',
            paddingLeft: '15px',
            borderBottom: '1px solid rgb(205 221 237)',
          }}
        >
          <Skeleton
            variant="rectangular"
            height="40%"
            width="8%"
            sx={{ borderRadius: '5px' }}
          />
          <Skeleton
            variant="rectangular"
            height="40%"
            width="70%"
            sx={{ borderRadius: '5px' }}
          />
          <Skeleton
            variant="rectangular"
            height="40%"
            width="8%"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
        <Grid
          sx={{
            height: '65px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: '15px',
            paddingLeft: '15px',
            borderBottom: '1px solid rgb(205 221 237)',
          }}
        >
          <Skeleton
            variant="rectangular"
            height="40%"
            width="8%"
            sx={{ borderRadius: '5px' }}
          />
          <Skeleton
            variant="rectangular"
            height="40%"
            width="70%"
            sx={{ borderRadius: '5px' }}
          />
          <Skeleton
            variant="rectangular"
            height="40%"
            width="8%"
            sx={{ borderRadius: '5px' }}
          />
        </Grid>
      </Box>
    }
  />
);

export default TableSkeletons;
