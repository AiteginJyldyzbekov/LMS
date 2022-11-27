import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface props {
  num: number;
}

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number }
) => {
  const { value } = props;
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        sx={{ color: '#FFFBFB' }}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="p"
          color="#FFFBFB"
          sx={{ margin: '0 auto' }}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};

const Progress: React.FC<props> = ({ num }) => (
  <CircularProgressWithLabel value={num} />
);

export default Progress;
