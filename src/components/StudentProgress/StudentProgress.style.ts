import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  progress_card: {
    background: '#2C2E34',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '12px',
    gridArea: 'p',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
    gap: '20px',
    justifyContent: 'space-around',
    '@media (max-width:1360px)': {
      gap: '12px',
    },
  },
  progress_item: {
    backgroundColor: '#222429',
    height: '25px',
    borderRadius: '32px',
    position: 'relative',
    '@media (max-width:1660px)': {
      height: '20px',
    },
    '&  p': {
      position: 'absolute',
      left: '50%',
      right: 0,
      top: 1,
      bottom: 0,
      margin: 'auto',
      '@media (max-width:1660px)': {
        fontSize: '13px',
      },
    },
  },
  progress: {
    display: 'flex',
    justifuContent: 'center',
    alignItems: 'center',
    background: 'repeating-linear-gradient(to left, #B85507, #FD04EC)',
    boxShadow: '(0 5px 5px -6px #0546e0, 0 3px 7px #1172f9)',
    borderRadius: '20px',
    color: 'white',
    height: '100%',
    width: 0,
    transition: '1s ease 0.3s',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '16px',
  },
  stack: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
