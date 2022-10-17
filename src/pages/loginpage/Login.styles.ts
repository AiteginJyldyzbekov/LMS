import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  main: {
    width: 'gray',
    height: '100vh',
    backgroundColor: 'rgb(249, 250, 251)',
    padding: '15px'
  },
  left: {
    width: '34%',
    margin: '0px 0px 16px 16px',
    height: '95vh',
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: 'rgb(145 158 171 / 20%) 0px 3px 1px -2px, rgb(145 158 171 / 14%) 0px 2px 2px 0px, rgb(145 158 171 / 12%) 0px 1px 5px 0px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    ['@media (max-width: 780px)']: {
      display: 'none'
    }
  },
  rightAd: {
    ['@media (max-width: 780px)']: {
      width: '90%',
      heigth: '100%',
      marginTop: '50px'
    }
  },
  top: {
    ['@media(max-width: 780px)']: {
      display: 'none'
    },
    a: {
      color: 'green'
    }
  },
  topA: {
    margin: '0px 0px 0px 5px',
    fontWeight: '600',
    fontSize: '0.875rem',
    fontFamily: ' "Public Sans", sans-serif',
    color: 'rgb(32, 101, 209)',
    textDecoration: 'underline rgba(32, 101, 209, 0.4)',
  },
  bottom: {
    display: 'none',
    ['@media(max-width: 780px)']: {
      display: 'block',
      width: '100%',
      marginTop: '40px'
    }
  },
  p: {
    ['@media(max-width:780px)']: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      margin: '0'
    }
  },
  right: {
    width: '100%'
  },
  line: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0'
  },
  lineH1: {
    fontSize: '0.875rem',
    fontWeight: '400',
    color: 'rgb(99, 115, 129)',
    padding: '0 5px',
    width: '10%',
    textAlign: 'center'
  },
  lineSpan: {
    width: '45%',
    height: '1px',
    background: 'rgb(99, 115, 129)'
  },
  forgot: {
    margin: '0px 0px 0px 5px',
    fontWeight: '600',
    fontSize: '0.975rem',
    fontFamily: '"Public Sans", sans - serif',
    color: 'rgb(32, 101, 209)',
    textDecoration: ' underline rgba(32, 101, 209, 0.4)'
  },
  rightCl: {
    width: '40%'
  }
}));

export default useStyles;
