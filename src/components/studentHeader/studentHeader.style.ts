import { makeStyles } from '@mui/styles';
import searchIcon from '../../../public/images/StudentHeader/Search.svg';

const useStyles = makeStyles(() => ({
  discount: {
    gridArea: 'd',
    background: '#2C2E34',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '32px',
    '& p': {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '13px',
      lineHeight: '15px',
      letterSpacing: '0.03em',
      color: '#FFFFFF',
      '@media (max-width: 1320px)': {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '380px',
      },
    },
  },
  input__wrapper: {
    gridArea: 'w',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a:last-child': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  back__links: {
    width: '40px',
    height: '100%',
    background: '#2C2E34',
    borderRadius: '7px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header__container: {
    width: '100%',
    display: 'grid',
    gridTemplateRows: '40px',
    gridTemplateColumns: '1fr 0.9fr 180px',
    gridTemplateAreas: "'i d w'",
    columnGap: '20px',
    padding: '20px 0',
  },
  input: {
    gridArea: 'i',
    background: '#2C2E34',
    borderRadius: '7px',
    border: '1px solid #2C2E34',
    outline: '0',
    paddingLeft: '50px',
    paddingTop: '2px',
    color: '#707070',
    backgroundImage: `url(${searchIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundPositionX: '15px',
    '&::placeholder': {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '13px',
      lineHeight: '15px',
      color: '#787878',
    },
  },
}));

export default useStyles;
