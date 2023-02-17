import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  progress_card: {
    display: 'flex',
    alignItems: 'center',
    background: '#2C2E34',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '12px',
    padding: '10px',
    gridArea: 's',
    gap: '10px',
  },
  progress_card_right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  progress: {
    backgroundColor: '#BFBFBF',
    width: '300px',
    height: '5px',
    borderRadius: '20px',
    '@media (min-width:1720px)': {
      width: '400px',
    },
    '@media (min-width:1820px)': {
      width: '460px',
    },
  },
  progress_bar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'repeating-linear-gradient(to left, #B85507, #FD04EC)',
    boxShadow: '(0 5px 5px -6px #0546e0, 0 3px 7px #1172f9)',
    borderRadius: '20px',
    color: 'white',
    height: '100%',
    width: 0,
    transition: '1s ease 0.3s',
  },
  percent: {
    background: 'linear-gradient(90deg, #B85507 0.94%, #FD04EC 12.68%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '23px',
    '@media (min-width:1720px)': {
      fontSize: '24px',
    },
    '@media (min-width:1820px)': {
      fontSize: '26px',
    },
  },
  completed: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    color: '#BFBFBF',
    '@media (min-width:1720px)': {
      fontSize: '16px',
    },
    '@media (min-width:1820px)': {
      fontSize: '18px',
    },
  },
}));
