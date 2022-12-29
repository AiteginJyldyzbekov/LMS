import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks/hook';
import { getDirection } from '../../../store/slices/DirectionSlice';
import AccordionDirection from '../../../components/AccordionAdmin/AccordionDirection';
import MainPageContainer from '../../../components/mainPageContainer/MainPageContainer';

const DirectionDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  type ParamsType = {
    id: string;
  };
  const { id } = useParams() as ParamsType;

  useEffect(() => {
    dispatch(getDirection(id));
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
  const [isToggle, setToggle] = useState<boolean>(false);

  const renderAccardion = useMemo(
    () =>
      data.map((item) => (
        <AccordionDirection title={item.title} text={item.text} />
      )),
    [data]
  );

  const renderMenu = useCallback(() => {
    if (isToggle) {
      return (
        <Grid item sx={{ width: '100%' }}>
          {renderAccardion}
        </Grid>
      );
    }
    return (
      <Grid item sx={{ width: '100%' }}>
        {renderAccardion}
      </Grid>
    );
  }, [isToggle]);

  const renderButtons = useCallback(() => {
    if (isToggle) {
      return (
        <>
          <Button
            variant="contained"
            size="large"
            onClick={() => setToggle(true)}
          >
            {t('DirectionPage.detail')}
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setToggle(false)}
          >
            {t('DirectionPage.homeWorks')}
          </Button>
        </>
      );
    }
    return (
      <>
        <Button variant="outlined" size="large" onClick={() => setToggle(true)}>
          {t('DirectionPage.detail')}
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => setToggle(false)}
        >
          {t('DirectionPage.homeWorks')}
        </Button>
      </>
    );
  }, [isToggle]);
  return (
    <MainPageContainer isGoBack>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          textAlign: 'center',
        }}
        gap={5}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ gap: '20px' }}
        >
          {renderButtons()}
        </Grid>
        <Grid
          container
          gap={2}
          direction="row"
          justifyContent="center"
          alignItems="start"
          sx={{ width: '100%' }}
        >
          {renderMenu()}
        </Grid>
        <Button variant="contained" size="large" sx={{ width: '100%' }}>
          {t('DirectionPage.add')}
        </Button>
      </Grid>
    </MainPageContainer>
  );
};

export default DirectionDetailPage;
