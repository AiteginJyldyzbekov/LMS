import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AccordionAdmin from '../../../components/AccordionAdmin/AccordionAdmin';
import MainPageContainer from '../../../components/mainPageContainer/MainPageContainer';

const HomeWorksStudent: React.FC = () => {
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
          <AccordionAdmin title={item.title} text={item.text} />
        ))}
      </MainPageContainer>
    </div>
  );
};

export default HomeWorksStudent;
