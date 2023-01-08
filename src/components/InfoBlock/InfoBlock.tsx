import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IInfo } from '../../types/types';

interface IProps {
  info: IInfo[];
}

const InfoBlock: React.FC<IProps> = ({ info }) => {
  const { t } = useTranslation();
  return (
    <Grid container>
      <Grid
        item
        xl={8}
        lg={10}
        xs={10}
        md={10}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          marginTop: '20px',
        }}
      >
        {info.map((item) => (
          <Grid key={item.id}>
            <Typography component="p">{t(item.title)}:</Typography>
            <Grid
              sx={{
                width: '300px',
                height: '40px',
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
        ))}
      </Grid>
    </Grid>
  );
};

export default InfoBlock;
