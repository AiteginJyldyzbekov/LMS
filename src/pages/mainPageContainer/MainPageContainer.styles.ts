import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    paddingRight: '60px',
    paddingLeft: '60px',
    marginTop: '60px',
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
}));

export default useStyles;
