import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100vh',
  },
  content_wrapper: {
    padding: '0 15%',
    minHeight: '100vh',
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export default useStyles;
