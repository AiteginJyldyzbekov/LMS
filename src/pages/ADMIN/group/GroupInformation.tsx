import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { info } from '../../../constants/GroupInformation';

const GroupInformation: React.FC = () => {
  const { t } = useTranslation();
  const renderInfo = React.useMemo(
    () =>
      info.map((item) => (
        <Grid key={item.id}>
          <Typography component="p">{t(item.title)}:</Typography>
          <Grid
            sx={{
              width: '200px',
              height: '30px',
              border: '1px solid rgba(224, 224, 224, 1)',
              borderRadius: '3px',
              paddingLeft: '15px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography>{t(item.res)}</Typography>
          </Grid>
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
