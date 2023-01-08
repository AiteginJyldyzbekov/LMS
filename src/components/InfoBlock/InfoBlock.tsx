import React, { useMemo } from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IInfo } from '../../types/types';
import { useStyles } from './infoBlock.style';

interface IProps {
  info: IInfo[];
}

const InfoBlock: React.FC<IProps> = ({ info }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const renderData = useMemo(
    () =>
      info.map((item) => (
        <Grid key={item.id}>
          <Typography component="p">{t(item.title)}:</Typography>
          <Grid className={classes.dataItem}>
            <Typography>{t(item.dataItem)}</Typography>
          </Grid>
        </Grid>
      )),
    [info]
  );
  return (
    <Grid container sx={{ marginBottom: '50px' }}>
      <Grid
        item
        xl={8}
        lg={12}
        xs={12}
        md={12}
        className={classes.dataItemsWrapper}
      >
        {renderData}
      </Grid>
    </Grid>
  );
};

export default InfoBlock;
