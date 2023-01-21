import React from 'react';
import { Grid, Skeleton } from '@mui/material';
import { useStyles } from './DashboardSkeleton.style';

const DashboardSkeleton: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.wrapper}>
      <Skeleton
        animation="wave"
        variant="circular"
        width="100%"
        height="118px"
        sx={{
          gridArea: 'g',
          borderRadius: '12px',
          bgcolor: '#2C2E34',
        }}
      />
      <Skeleton
        animation="wave"
        variant="circular"
        width="100%"
        height="118px"
        sx={{
          gridArea: 's',
          borderRadius: '12px',
          bgcolor: '#2C2E34',
        }}
      />
      <Skeleton
        animation="wave"
        variant="circular"
        width="100%"
        height="426px"
        sx={{
          gridArea: 'c',
          borderRadius: '12px',
          bgcolor: '#2C2E34',
        }}
      />
      <Skeleton
        animation="wave"
        variant="circular"
        width="100%"
        height="426px"
        sx={{
          gridArea: 'p',
          borderRadius: '12px',
          bgcolor: '#2C2E34',
        }}
      />
      <Skeleton
        animation="wave"
        variant="circular"
        width="100%"
        height="230px"
        sx={{
          gridArea: 'o',
          borderRadius: '12px',
          bgcolor: '#2C2E34',
        }}
      />
      <Skeleton
        animation="wave"
        variant="circular"
        width="100%"
        height="118px"
        sx={{
          gridArea: 'd',
          borderRadius: '12px',
          bgcolor: '#2C2E34',
        }}
      />
    </Grid>
  );
};

export default DashboardSkeleton;
