import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AccordionStudent from '../../../components/AccordionStudent/AccordionStudent';
import MainPageContainer from '../../../components/mainPageContainer/MainPageContainer';

const HomeWorksStudent: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: 'Home work 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
      completed: true,
    },
    {
      title: 'Home work 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
      completed: true,
    },
    {
      title: 'Home work 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
      completed: true,
    },
    {
      title: 'Home work 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
      completed: false,
    },
    {
      title: 'Home work 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
      completed: false,
    },
  ];
  return (
    <div>
      <MainPageContainer>
        <Typography
          textAlign="center"
          component="p"
          sx={{
            fontSize: '30px',
            fontWeight: '400',
            marginBottom: '20px',
          }}
        >
          {t('HomeWorks.title')}
        </Typography>
        {data.map((item) => (
          <AccordionStudent
            title={item.title}
            text={item.text}
            completed={item.completed}
          />
        ))}
      </MainPageContainer>
    </div>
  );
};

export default HomeWorksStudent;
