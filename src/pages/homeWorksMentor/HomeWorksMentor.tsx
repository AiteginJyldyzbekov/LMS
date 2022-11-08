import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeWorksSelect from '../../components/homeWorksMentorSelect/HomeWorksAccordion';

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
      <Grid
        sx={{
          paddingRight: '60px',
          paddingLeft: '60px',
          marginTop: '20px',
          '@media (max-width: 1200px)': {
            paddingRight: '40px',
            paddingLeft: '40px',
          },
          '@media (max-width: 768px)': {
            paddingRight: '20px',
            paddingLeft: '20px',
          },
          '@media (max-width: 375px)': {
            paddingRight: '10px',
            paddingLeft: '10px',
          },
        }}
      >
        {data.map((item) => (
          <HomeWorksSelect title={item.title} text={item.text} />
        ))}
      </Grid>
    </div>
  );
};

export default HomeWorksMentor;
