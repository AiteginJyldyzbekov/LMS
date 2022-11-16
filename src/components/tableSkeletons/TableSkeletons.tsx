import React from 'react';
import { Box, Skeleton, TableCell, TableRow } from '@mui/material';
import TableContainer from '../TableContainer/TableContainer';
import SkeletonCell from './SkeletonCell';

const TableSkeletons: React.FC = () => (
  <TableContainer
    isLoading={false}
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
        <SkeletonCell />
        <SkeletonCell />
        <SkeletonCell />
        <SkeletonCell />
      </Box>
    }
  />
);

export default TableSkeletons;
