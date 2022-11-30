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
  active: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: '11px',
    boxShadow: '0px 4px 4px rgba(34, 15, 148, 0.3)',
    background: '#634CEE',
    color: 'white',
    height: '50px',
    padding: '5px 15px',
    alignItems: 'center',
  },
  disabled: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: '11px',
    boxShadow: '0px 4px 4px rgba(34, 15, 148, 0.3)',
    background: ' #C9C8CF',
    color: 'white',
    height: '50px',
    padding: '5px 15px',
    alignItems: 'center',
  },
  pActive: {
    color: '#261493',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '15px',
  },
  pDisabled: {
    color: 'gray',
    fontweight: '600',
    fontSize: '12px',
    lineHeight: '15px',
  },
}));

export default useStyles;
