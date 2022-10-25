import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    margin: '96px auto',
    display: 'grid',
  },
  title: {
    fontSize: '1.875rem',
  },
  description: {
    color: 'rgb(99, 115, 129)',
    width: '450px',
    margin: '0 auto',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    '@media (max-width:540px)': {
      width: '90%',
    },
  },
  image: {
    display: 'flex',
    margin: '80px auto',
    height: '260px',
  },
  link: {
    textDecoration: 'none',
    margin: '0 auto',
  },
}));

export default useStyles;
