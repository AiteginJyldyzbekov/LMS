import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  navigation: {
    display: 'flex',
    marginLeft: '20px',
    alignItems: 'center',
    borderRadius: '7px',
  },
  frame: {
    backgroundColor: '#2C2E34',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '15px',
    letterSpacing: '0.03em',
    color: '#FFFFFF',
    textDecoration: 'none',
    padding: '1% 2% 1% 2%',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    background: 'none',
    border: 'none',
    '&:first-child ': {
      borderTopLeftRadius: '7px',
      borderBottomLeftRadius: '7px',
    },
    '&:last-child ': {
      borderTopRightRadius: '7px',
      borderBottomRightRadius: '7px',
    },
    '@media (max-width: 1500px)': {
      padding: '0.8% 2% 0.8% 2%',
    },
  },
  active: {
    background: '#6B9AFF',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '15px',
    letterSpacing: '0.03em',
    color: '#FFFFFF',
    height: '100%',
    padding: '1% 2% 1% 2%',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    border: 'none',
    '@media (max-width: 1500px)': {
      padding: '0.8% 2% 0.8% 2%',
    },
  },
  course: {
    margin: '20px 32px 0 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}));
