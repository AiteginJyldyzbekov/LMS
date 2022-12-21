import { Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import AccordionStudent from '../../../components/AccordionStudent/AccordionStudent';
import MainPageContainer from '../../../components/mainPageContainer/MainPageContainer';

const StudyPlanStudent: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: 'Study Plan 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      id: 2,
      title: 'Study Plan 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      id: 3,
      title: 'Study Plan 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      id: 4,
      title: 'Study Plan 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
    {
      id: 5,
      title: 'Study Plan 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin.',
    },
  ];
  const accordions = useMemo(
    () => data.map((item) => <AccordionStudent key={item.id} {...item} />),
    [data]
  );
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
          {t('StudyPlan.title')}
        </Typography>
        {accordions}
      </MainPageContainer>
    </div>
  );
};

export default StudyPlanStudent;
