import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useTranslation } from 'react-i18next';
import Progress from './Progress';
import { arrData } from '../../types/types';

const StudentsProgressItem: React.FC<arrData> = ({ done, title, classes }) => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        width: '100%',
        borderRadius: '11px',
        boxShadow: '0px 4px 4px rgba(34, 15, 148, 0.3)',
        background: '#634CEE',
        color: 'white',
        height: '50px',
        display: 'flex',
        padding: '5px 15px',
        alignItems: 'center',
      }}
    >
      <Grid sx={{ display: 'flex' }} gap={2}>
        <Progress num={done} />
        <Grid container direction="column" gap={1}>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '17px',
              color: 'white',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: '#261493',
              fontWeight: '600',
              fontSize: '12px',
              lineHeight: '15px',
            }}
          >
            {classes} {t('StudentsDashboard.lessonsLeft')}
          </Typography>
        </Grid>
      </Grid>
      <IconButton>
        <ArrowForwardIosIcon sx={{ color: 'white' }} />
      </IconButton>
    </Grid>
  );
};

export default StudentsProgressItem;
