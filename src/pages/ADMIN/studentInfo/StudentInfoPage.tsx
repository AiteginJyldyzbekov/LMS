import React from 'react';
import PageContainer from '../../../components/PageContainer/PageContainer';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const StudentInfoPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer
      btnText={t('StudentData.change')}
      name="Данные студента"
      puth="/changeStudent"
      isGoBack
    >
      <Grid
        sx={{
          marginBttom: '20px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Grid
          sx={{
            width: '45%',
          }}
        >
          <Typography variant="subtitle1">
            {t('StudentData.direction')}:
          </Typography>
          <Typography
            sx={{
              border: '1px solid rgba(0, 0, 0, 0.23)',
            }}
            variant="subtitle1"
          >
            idjidsjfid
          </Typography>
        </Grid>
        <Grid
          sx={{
            width: '48%',
          }}
        >
          <Typography variant="subtitle1">
            {t('StudentData.direction')}:
          </Typography>
          <Typography
            sx={{
              border: '1px solid rgba(0, 0, 0, 0.23)',
            }}
            variant="subtitle1"
          >
            idjidsjfid
          </Typography>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default StudentInfoPage;
