import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  profileImg: {
    width: '60px',
    height: '60px',
    border: '1px solid black',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  greeting: {
    boxShadow: 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    height: '102vh',
    marginLeft: '15px',
    '@media (max-width: 900px)': {
      display: 'block',
      boxShadow: 'none',
      width: '100%',
      height: 'fit-content',
    },
    '@media (max-width: 1024px)': {
      boxShadow: 'none',
    },
  },
}));

export default useStyles;
