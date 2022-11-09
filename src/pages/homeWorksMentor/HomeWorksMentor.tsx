import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AccordionMentor from '../../components/AccordionMentor/AccordionMentor';
import MainPageContainer from '../mainPageContainer/MainPageContainer';

const HomeWorksMentor: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: 'Home work 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      title: 'Home work 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      title: 'Home work 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      title: 'Home work 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      title: 'Home work 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
  ];
  return (
    <div>
      <Typography
        textAlign="center"
        component="p"
        sx={{
          fontSize: '30px',
          fontWeight: '400',
          marginTop: '30px',
        }}
      >
        {t('HomeWorksMentor.title')}
      </Typography>
      <MainPageContainer>
        {data.map((item) => (
          <AccordionMentor title={item.title} text={item.text} />
        ))}
      </MainPageContainer>
    </div>
  );
};

export default HomeWorksMentor;
