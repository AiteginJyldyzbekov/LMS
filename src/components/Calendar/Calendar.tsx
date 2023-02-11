import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deDE } from '@mui/x-date-pickers';
import Grid from '@mui/material/Grid';
import { useStyles } from './Calendar.style';

const Calendar = () => {
  const styles = useStyles();
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const theme = createTheme(
    {
      palette: {
        primary: { main: '#1976d2' },
      },
    },
    deDE
  );
  return (
    <div className={styles.calendar_card}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
          <Grid
            item
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'start',
            }}
          >
            <CalendarPicker
              date={date}
              onChange={(newDate) => setDate(newDate)}
              showDaysOutsideCurrentMonth
              dayOfWeekFormatter={(day: any) =>
                day.charAt(0).toUpperCase() + day.charAt(1).toLowerCase()
              }
            />
          </Grid>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
};

export default Calendar;
