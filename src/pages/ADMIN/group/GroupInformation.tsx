import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { info } from '../../../constants/GroupInformation';
import { useStyles } from './groupStyles/GroupInformation.style';

const GroupInformation: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const renderInfo = React.useMemo(
    () =>
      info.map((item) => (
        <Grid key={item.id}>
          <Typography component="p">{t(item.title)}:</Typography>
          <div className={classes.infoItem}>
            <Typography>{t(item.information)}</Typography>
          </div>
        </Grid>
      )),
    [info]
  );
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={5}
        sx={{ width: '40%', display: 'flex', flexWrap: 'wrap', gap: '15px' }}
      >
        {renderInfo}
      </Grid>
    </Grid>
  );
};

export default GroupInformation;
