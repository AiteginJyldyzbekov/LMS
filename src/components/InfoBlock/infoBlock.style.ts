import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  dataItem: {
    width: '400px',
    height: '40px',
    border: '1px solid rgba(224, 224, 224, 1)',
    borderRadius: '3px',
    paddingLeft: '15px',
    display: 'flex',
    alignItems: 'center',
  },
  dataItemsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px',
    marginTop: '20px',
    marginBottom: '70px',
  },
}));
