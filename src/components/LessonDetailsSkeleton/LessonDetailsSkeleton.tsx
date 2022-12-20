import { Skeleton } from '@mui/material';
import React from 'react';
import MainPageContainer from '../mainPageContainer/MainPageContainer';
import useStyles from './LessonDetailsSkeleton.style';

const LessonDetailsSkeleton: React.FC = () => {
  const classes = useStyles();
  return (
    <MainPageContainer isGoBack>
      <div className={classes.container}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="40px"
          sx={{
            borderRadius: '16px',
            marginTop: '30px',
          }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="556px"
          sx={{
            borderRadius: '26px',
          }}
        />
        <div>
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: '30px', borderRadius: '10px' }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: '30px', borderRadius: '10px' }}
          />
        </div>
        <Skeleton
          animation="wave"
          variant="rounded"
          width="100%"
          height="110px"
          sx={{ borderRadius: '20px' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: '30px', borderRadius: '10px' }}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width="100%"
          height="87px"
          sx={{ borderRadius: '20px', marginBottom: '100px' }}
        />
      </div>
    </MainPageContainer>
  );
};
export default LessonDetailsSkeleton;
