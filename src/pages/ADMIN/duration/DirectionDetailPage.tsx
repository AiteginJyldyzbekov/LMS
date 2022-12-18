import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks/hook';
import { useSelectorDirection } from '../../../store/selectors';
import { getDirection } from '../../../store/slices/DirectionSlice';
import AccordionDirection from '../../../components/AccordionAdmin/AccordionDirection';

const DirectionDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { result } = useSelectorDirection();
  const d = useAppDispatch();
  type ParamsType = {
    id: string;
  };
  const { id } = useParams() as ParamsType;

  useEffect(() => {
    d(getDirection(id));
  }, []);

  const data = [
    {
      title: 'Study Plan 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      title: 'Study Plan 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      title: 'Study Plan 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      title: 'Study Plan 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      title: 'Study Plan 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        textAlign: 'center',
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ gap: '55px', margin: '4% 0' }}
      >
        <Typography variant="h5">{t('DirectionPage.detail')}</Typography>
        <Typography variant="h5">{result?.name}</Typography>
      </Grid>
      <Grid
        container
        gap={2}
        direction="row"
        justifyContent="center"
        alignItems="start"
      >
        <Grid item xs={10} sm={4} sx={{ width: '30%' }}>
          {data.map((item) => (
            <AccordionDirection title={item.title} text={item.text} />
          ))}
        </Grid>
        <Grid item xs={10} sm={4} sx={{ width: '30%' }}>
          {data.map((item) => (
            <AccordionDirection title={item.title} text={item.text} />
          ))}
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ width: '61%' }}>
        {t('DirectionPage.addDirection')}
      </Button>
    </Grid>
  );
};

export default DirectionDetailPage;
