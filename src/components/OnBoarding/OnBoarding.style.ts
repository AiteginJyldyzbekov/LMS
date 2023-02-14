import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  onBoarding: {
    gridArea: 'o',
    '& h4': {
      position: 'relative',
      '&::after': {
        content: `''`,
        position: 'absolute',
        height: '1px',
        backgroundColor: '#515151',
        width: '70%',
        top: '20px',
        left: '15%',
      },
    },
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '@global': {
    '.slick-disabled': {
      backgroundColor: '#D9D9D966 !important',
    },
    '.slick-next:before': {
      content: `" "`,
    },
    '.slick-prev:before': {
      content: `" "`,
    },
  },
}));
