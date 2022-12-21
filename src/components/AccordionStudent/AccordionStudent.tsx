import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Divider, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import icon from '../../../public/images/accordionStudent/success_icon.png';
import {
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from './AccordionStudentStyled';
import useStyles from './AccordionStudent.styles';

interface AccordionStudentProps {
  title: string;
  text: string;
  completed?: boolean;
  id: number;
  isHomeWork?: boolean;
}
const AccordionStudent: React.FC<AccordionStudentProps> = ({
  title,
  text,
  completed = false,
  id,
  isHomeWork,
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const classes = useStyles();
  const handleChange = (panel: string, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { t } = useTranslation();

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={() => handleChange('panel1', !expanded)}
        sx={{
          marginTop: '10px',
        }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              {title}
            </Typography>
            {completed && (
              <img src={icon} className={classes.successIcon} alt="icon" />
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{text}</Typography>
        </AccordionDetails>
        <Divider
          sx={{
            width: '100%',
          }}
        />
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Link
            to={isHomeWork ? `/home-work/${id}` : `/lesson/${id}`}
            className={classes.link}
          >
            <Button
              variant="outlined"
              sx={{
                margin: '10px',
                '@media (max-width: 310px)': {
                  width: '90%',
                },
              }}
            >
              {t('HomeWorksAdmin.details')}
            </Button>
          </Link>
        </Grid>
      </Accordion>
    </div>
  );
};

export default AccordionStudent;
