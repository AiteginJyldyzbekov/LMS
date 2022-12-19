import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import EditOffIcon from '@mui/icons-material/EditOff';
import { Box, Divider, Grid, IconButton, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';
import useStyles from './AccordionAdmin.styles';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
    sx={{
      width: '100%',
    }}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface HomeWorksProps {
  title: string;
  text: string;
}
const AccordionAdmin: React.FC<HomeWorksProps> = ({ title, text }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [edit, setEdit] = useState(false);
  const [detail, setDetail] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleChange = (panel: string, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { t } = useTranslation();
  const classes = useStyles();

  function createMarkup() {
    return { __html: text };
  }

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
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {edit ? (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <ReactQuill
                  className={classes.editor}
                  theme="snow"
                  value={newText}
                  onChange={(e) => setNewText(e)}
                />
              </Box>
            ) : (
              <div dangerouslySetInnerHTML={createMarkup()} />
            )}
          </Box>
        </AccordionDetails>
        <Divider />
        <Grid
          sx={{
            padding: '10px',
            width: '100%',
            '@media (max-width: 310px)': {
              textAlign: 'center',
            },
          }}
        >
          <IconButton color="primary" onClick={() => setEdit(!edit)}>
            <EditOffIcon
              sx={{
                '@media (max-width: 310px)': {
                  width: '100%',
                },
              }}
            />
          </IconButton>
          <Button
            onClick={() => setDetail(!detail)}
            variant="outlined"
            sx={{
              marginLeft: '10px',
              '@media (max-width: 310px)': {
                width: '90%',
              },
            }}
          >
            {t('HomeWorksAdmin.details')}
          </Button>

          {edit && (
            <Button
              onClick={() => setEdit(false)}
              sx={{
                marginLeft: '10px',
                '@media (max-width: 310px)': {
                  marginTop: '5px',
                  width: '90%',
                },
              }}
              variant="outlined"
            >
              {t('CreateMentor.save')}
            </Button>
          )}
        </Grid>
      </Accordion>
    </div>
  );
};

export default AccordionAdmin;
