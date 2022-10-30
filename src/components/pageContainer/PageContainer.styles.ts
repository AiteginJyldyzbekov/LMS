import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
  },
  btn: {
    width: '100px',
    height: '30px',
  },
  btnText: {
    fontSize: '10px',
  },
  content_wrapper: {
    paddingRight: '100px',
    paddingLeft: '100px',
    marginTop: '20px',
    '@media (max-width: 1200px)': {
      paddingRight: '50px',
      paddingLeft: '50px',
    },
    '@media (max-width: 768px)': {
      paddingRight: '25px',
      paddingLeft: '25px',
    },
    '@media (max-width: 375px)': {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
  },
  wrapper: {
    paddingRight: '100px',
    paddingLeft: '100px',
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 1200px)': {
      paddingRight: '50px',
      paddingLeft: '50px',
    },
    '@media (max-width: 768px)': {
      paddingRight: '25px',
      paddingLeft: '25px',
    },
    '@media (max-width: 375px)': {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
  },
}));

export default useStyles;
