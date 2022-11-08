import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AccordionMentor from '../../components/AccordionMentor/AccordionMentor';

const StudyPlanMentor: React.FC = () => {
  const { t } = useTranslation();
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
        {t('StudyPlanMentor.title')}
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
          <AccordionMentor title={item.title} text={item.text} />
        ))}
      </Grid>
    </div>
  );
};

export default StudyPlanMentor;
