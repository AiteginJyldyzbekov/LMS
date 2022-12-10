import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
  },
  inputsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    gap: '20px',
  },
  title: {
    marginTop: '30px',
    marginBottom: '30px',
    fontWeight: '500',
    textAlign: 'center',
  },
  btnsContainer: {
    marginTop: '15px',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
