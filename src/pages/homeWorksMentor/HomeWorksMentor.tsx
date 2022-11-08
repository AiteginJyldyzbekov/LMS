import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const HomeWorksMentor: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: 'Home work 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin. Nullam massa odio, sollicitudin ut nibh sit amet, ullamcorper pretium lacus. Nullam rutrum mattis varius. Vestibulum eleifend feugiat enim eu mattis. Donec accumsan ipsum eu blandit vestibulum. Sed vel mi mattis, sodales leo at, pharetra mi. Quisque sit amet rutrum justo, at eleifend enim. Donec sodales tellus convallis enim ornare, a scelerisque nisl luctus. Sed semper suscipit mauris sit amet aliquam. Ut aliquam fermentum interdum. Morbi semper lectus sed tellus pellentesque, ac auctor sapien egestas. Praesent ut est vel mauris interdum interdum ac quis ipsum. Proin sit amet augue facilisis, convallis libero quis, ullamcorper orci. Nunc porta urna sit amet lorem placerat, eget accumsan magna auctor.',
    },
    {
      title: 'Home work 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin. Nullam massa odio, sollicitudin ut nibh sit amet, ullamcorper pretium lacus. Nullam rutrum mattis varius. Vestibulum eleifend feugiat enim eu mattis. Donec accumsan ipsum eu blandit vestibulum. Sed vel mi mattis, sodales leo at, pharetra mi. Quisque sit amet rutrum justo, at eleifend enim. Donec sodales tellus convallis enim ornare, a scelerisque nisl luctus. Sed semper suscipit mauris sit amet aliquam. Ut aliquam fermentum interdum. Morbi semper lectus sed tellus pellentesque, ac auctor sapien egestas. Praesent ut est vel mauris interdum interdum ac quis ipsum. Proin sit amet augue facilisis, convallis libero quis, ullamcorper orci. Nunc porta urna sit amet lorem placerat, eget accumsan magna auctor.',
    },
    {
      title: 'Home work 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin. Nullam massa odio, sollicitudin ut nibh sit amet, ullamcorper pretium lacus. Nullam rutrum mattis varius. Vestibulum eleifend feugiat enim eu mattis. Donec accumsan ipsum eu blandit vestibulum. Sed vel mi mattis, sodales leo at, pharetra mi. Quisque sit amet rutrum justo, at eleifend enim. Donec sodales tellus convallis enim ornare, a scelerisque nisl luctus. Sed semper suscipit mauris sit amet aliquam. Ut aliquam fermentum interdum. Morbi semper lectus sed tellus pellentesque, ac auctor sapien egestas. Praesent ut est vel mauris interdum interdum ac quis ipsum. Proin sit amet augue facilisis, convallis libero quis, ullamcorper orci. Nunc porta urna sit amet lorem placerat, eget accumsan magna auctor.',
    },
    {
      title: 'Home work 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin. Nullam massa odio, sollicitudin ut nibh sit amet, ullamcorper pretium lacus. Nullam rutrum mattis varius. Vestibulum eleifend feugiat enim eu mattis. Donec accumsan ipsum eu blandit vestibulum. Sed vel mi mattis, sodales leo at, pharetra mi. Quisque sit amet rutrum justo, at eleifend enim. Donec sodales tellus convallis enim ornare, a scelerisque nisl luctus. Sed semper suscipit mauris sit amet aliquam. Ut aliquam fermentum interdum. Morbi semper lectus sed tellus pellentesque, ac auctor sapien egestas. Praesent ut est vel mauris interdum interdum ac quis ipsum. Proin sit amet augue facilisis, convallis libero quis, ullamcorper orci. Nunc porta urna sit amet lorem placerat, eget accumsan magna auctor.',
    },
    {
      title: 'Home work 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod congue mi vitae sollicitudin. Nullam massa odio, sollicitudin ut nibh sit amet, ullamcorper pretium lacus. Nullam rutrum mattis varius. Vestibulum eleifend feugiat enim eu mattis. Donec accumsan ipsum eu blandit vestibulum. Sed vel mi mattis, sodales leo at, pharetra mi. Quisque sit amet rutrum justo, at eleifend enim. Donec sodales tellus convallis enim ornare, a scelerisque nisl luctus. Sed semper suscipit mauris sit amet aliquam. Ut aliquam fermentum interdum. Morbi semper lectus sed tellus pellentesque, ac auctor sapien egestas. Praesent ut est vel mauris interdum interdum ac quis ipsum. Proin sit amet augue facilisis, convallis libero quis, ullamcorper orci. Nunc porta urna sit amet lorem placerat, eget accumsan magna auctor.',
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
          <Accordion
            sx={{
              marginTop: '10px',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.text}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </div>
  );
};

export default HomeWorksMentor;
