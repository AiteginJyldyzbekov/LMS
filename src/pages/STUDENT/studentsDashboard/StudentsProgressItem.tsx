import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from 'react-i18next';
import useStyles from './Studentsdashboard.style';
import Progress from './Progress';
import { arrData } from './StudentsDashboard';

const StudentsProgressItem: React.FC<arrData> = ({ done, title, classes }) => {
  const { t } = useTranslation();
  const css = useStyles();
  return (
    <div className={done === 0 ? css.disabled : css.active}>
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
          <p className={done === 0 ? css.pDisabled : css.pActive}>
            {classes} {t('StudentsDashboard.lessonsLeft')}
          </p>
        </Grid>
      </Grid>
      <IconButton>
        <ArrowForwardIosIcon sx={{ color: 'white' }} />
      </IconButton>
    </div>
  );
};

export default StudentsProgressItem;
