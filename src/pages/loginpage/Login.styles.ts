import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  main: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgb(249, 250, 251)',
    padding: '15px',
    '@media(max-width: 880px)': {
      padding: '0px',
      width: '100%',
    },
  },
  mainL: {
    width: '34%',
    margin: '0px 0px 16px 16px',
    height: '95vh',
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow:
      'rgb(145 158 171 / 20%) 0px 3px 1px -2px, rgb(145 158 171 / 14%) 0px 2px 2px 0px, rgb(145 158 171 / 12%) 0px 1px 5px 0px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '@media (max-width: 880px)': {
      display: 'none',
    },
  },
  mainR: {
    '@media (max-width: 880px)': {
      width: '100%',
      heigth: '80vh !imporant',
      marginTop: '50px',
    },
  },
  mainTopSide: {
    '@media(max-width: 880px)': {
      display: 'none',
      heigth: '80vh',
    },
    a: {
      color: 'green',
    },
  },
  start: {
    margin: '0px 0px 0px 5px',
    fontWeight: '600',
    fontSize: '0.875rem',
    fontFamily: ' "Public Sans", sans-serif',
    color: 'rgb(32, 101, 209)',
    textDecoration: 'underline rgba(32, 101, 209, 0.4)',
  },
  under: {
    display: 'none',
    '@media(max-width: 880px)': {
      display: 'block',
      width: '100%',
      marginTop: '40px',
    },
  },
  p: {
    '@media(max-width:880px)': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      margin: '0',
    },
  },
  forgot: {
    margin: '0px 0px 0px 5px',
    fontWeight: '600',
    fontSize: '0.975rem',
    fontFamily: '"Public Sans", sans - serif',
    color: 'rgb(32, 101, 209)',
    textDecoration: ' underline rgba(32, 101, 209, 0.4)',
  },
  mainRcl: {
    width: '40%',
    '@media(max-width:880px)': {
      width: '100%',
      padding: '0px',
      heigth: '80vh',
      marginTop: '20px',
    },
  },
  text: {
    marginBottom: '20px',
    fontSize: '25px',
    fontWeight: 700,
    color: 'black',
  },
}));

export default useStyles;
