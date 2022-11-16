import { Grid, Skeleton } from '@mui/material';
import React from 'react';

const SkeletonCell: React.FC = () => (
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
);

export default SkeletonCell;
