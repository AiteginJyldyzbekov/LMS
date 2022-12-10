import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  circle: {
    width: '40px',
    height: '40px !important',
    borderRadius: '50%',
    border: '1px solid gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'gray',
    background: 'none',
    transition: 'ease-in-out .3s',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  circleAc: {
    width: '40px',
    height: '40px !important',
    borderRadius: '50%',
    border: '1px solid white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    corsor: 'pointer',
    color: 'white',
    transition: 'ease-in-out .3s',
    background: '#556cd6',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
