import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  titles: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: '30px',
    color: '#195ADA',
  },
  lesson_description: {
    width: '90%',
    marginLeft: '30px',
  },
  lesson_download: {
    width: '100%',
    padding: '24px 36px',
    background: 'rgba(25, 90, 218, 0.2)',
    borderRadius: '20px',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  additional: {
    display: 'flex',
    gap: '20px',
    marginBottom: '100px',
  },
  card: {
    padding: '20px 30px',
    color: '#fff',
    borderRadius: '10px',
    fontWeight: 500,
    fontSize: '20px',
    cursor: 'pointer',
  },
  video: {
    border: '20px',
  },
}));

export default useStyles;
