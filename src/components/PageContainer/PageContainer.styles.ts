import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    paddingRight: '60px',
    paddingLeft: '60px',
    marginTop: '50px',
    top: 0,
  },
  content_wrapper: {
    marginTop: '30px',
    marginBottom: '30px',
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
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      paddingRight: '40px',
      paddingLeft: '40px',
    },
    '@media (max-width: 768px)': {
      paddingRight: '20px',
      paddingLeft: '20px',
    },
    '@media (max-width: 580px)': {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
  },
}));

export default useStyles;
