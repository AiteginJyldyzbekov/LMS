import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  greet_card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#2C2E34',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '12px',
    padding: '20px',
    gap: '10px',
    gridArea: 'g',
  },
  greet: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '32px',
    lineHeight: '38px',
    color: '#FFFFFF',
    '@media (min-width:1720px)': {
      fontSize: '45px',
    },
    '@media (min-width:1820px)': {
      fontSize: '50px',
    },
  },
  dailyMotivation: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '23px',
    color: '#C0C0C0',
    '@media (min-width:1720px)': {
      fontSize: '18px',
      padding: '10px 0',
    },
    '@media (min-width:1820px)': {
      fontSize: '20px',
    },
  },
}));
