import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  calendar_card: {
    background: '#2C2E34',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '12px',
    gridArea: 'c',
  },
  $M: {
    color: 'red',
  },
  '@global': {
    '.MuiCalendarPicker-root': {
      width: '100% !important',
      minHeight: '100% !important',
    },
    '.MuiDayPicker-header ': {
      justifyContent: 'space-around !important',
      '& span': {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        display: 'flex',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
      },
    },
    '.MuiDayPicker-weekContainer': {
      justifyContent: 'space-around !important',

      '& button': {
        width: '36px',
        height: '36px',
        display: 'flex',
        justifyContent: 'center',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px',
        transition: 'ease-in-out .3s',
        alignItems: 'center',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        color: 'white',
        '&:nth-last-child(1)': {
          color: '#FF5F5F',
        },
        '&:nth-last-child(-n+2)': {
          color: '#FF5F5F',
        },
      },
    },
    '.MuiDayPicker-monthContainer': {
      minHeight: '344.99px !important',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    '.MuiDayPicker-weekDayLabel': {
      color: 'white !important',
      '&:nth-last-child(1)': {
        color: '#FF5F5F',
      },
      '&:nth-last-child(-n+2)': {
        color: '#FF5F5F',
      },
    },
    '.css-dxmyjx-MuiButtonBase-root-MuiPickersDay-root.Mui-selected': {
      background: '#6B9AFF !important',
      borderRadius: '7px !important',
      '&:nth-last-child(1)': {
        color: 'white !important',
        background: '#FF00F5 !important',
        borderRadius: '7px !important',
      },
      '&:nth-last-child(-n+2)': {
        color: 'white !important',
        background: '#FF00F5 !important',
        borderRadius: '7px !important',
      },
    },
    '.css-sf5t6v-PrivatePickersSlideTransition-root-MuiDayPicker-slideTransition':
      {
        overflowX: 'visible !important',
      },
    '.css-dxmyjx-MuiButtonBase-root-MuiPickersDay-root': {
      backgroundColor: '#2C2E34 !important',
    },
    '.css-1d1d7bu-MuiButtonBase-root-MuiPickersDay-root.Mui-selected': {
      background: '#6B9AFF !important',
      borderRadius: '7px !important',
      '&:nth-last-child(1)': {
        color: 'white !important',
        background: '#FF00F5 !important',
        borderRadius: '7px !important',
      },
      '&:nth-last-child(-n+2)': {
        color: 'white !important',
        background: '#FF00F5 !important',
        borderRadius: '7px !important',
      },
    },
    '.css-1d1d7bu-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)': {
      border: 'none !important',
    },
    '.css-1d1d7bu-MuiButtonBase-root-MuiPickersDay-root': {
      background: 'none !important',
    },
    '.css-i4bv87-MuiSvgIcon-root': {
      color: 'white !important',
      width: '100% !important',
      display: 'flex !important',
    },
    '.css-1tkx1wf-MuiSvgIcon-root-MuiPickersCalendarHeader-switchViewIcon': {
      display: 'none !important',
    },
    '.css-9reuh9-MuiPickersArrowSwitcher-root ': {
      width: '100% !important',
      display: 'flex !important',
      justifyContent: 'space-between !important',
    },
    '.css-10fao8b-MuiPickersCalendarHeader-labelContainer': {
      position: 'absolute !important',
      margin: '0',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    '.css-nk89i7-MuiPickersCalendarHeader-root': {
      position: 'relative !important',
    },
    '.css-dplwbx-MuiPickersCalendarHeader-label': {
      marginRight: '0 !important',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '23px',
      textAlign: 'center',
      color: '#FFFFFF',
    },
    '.css-1dk40rm-MuiButtonBase-root-MuiPickersDay-root': {
      color: '#565656 !important',
      '&:nth-last-child(1)': {
        color: '#565656 !important',
      },
      '&:nth-last-child(-n+2)': {
        color: '#565656 !important',
      },
    },
    '.css-1dk40rm-MuiButtonBase-root-MuiPickersDay-root.Mui-selected': {
      background: 'none !important',
      color: '#565656 !important',
    },
  },
}));
