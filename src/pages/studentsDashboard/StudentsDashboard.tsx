import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { useTranslation } from 'react-i18next';
import StudentsProgressItem from './StudentsProgressItem';
import { fakedata } from '../../types/types';
import useStyles from './Studentsdashboard.style';

const StudentsDashboard: React.FC = () => {
  const css = useStyles();
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const { t } = useTranslation();
  const data: fakedata[] = [
    {
      name: 'Adilhan',
      courses: 'Front-End',
      lessons: 25,
      progress: [
        {
          done: 73,
          title: 'HTML / CSS',
          classes: 5,
        },
        {
          done: 56,
          title: 'back-rnd',
          classes: 5,
        },
      ],
    },
  ];

  return (
    <>
      {data.map((el) => (
        <Grid container spacing={2}>
          <div className={css.greeting}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: '80%', margin: '0 auto', marginTop: '70px' }}
            >
              <Typography sx={{ fontWeight: '600', fontSize: '36px' }}>
                {t('StudentsDashboard.greeting')} {el.name}!!!
              </Typography>
              <IconButton>
                <NotificationsNoneIcon
                  sx={{ width: '34px ', height: '34px', cursor: 'pointer' }}
                />
              </IconButton>
            </Grid>
            <Grid
              sx={{
                width: '80%',
                margin: '0 auto',
                marginTop: '7%',
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: '24px',
                    lineHeight: '29px',
                  }}
                >
                  {' '}
                  {t('StudentsDashboard.yourCourses')}{' '}
                </Typography>
                <Box
                  sx={{
                    width: '186px',
                    height: '130px',
                    background: 'orange',
                    borderRadius: '13px',
                    margin: '15px 0',
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '20px',
                  }}
                >
                  {el.courses}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: '11px',
                    lineHeight: '13px',
                  }}
                >
                  {el.lessons}
                  {t('StudentsDashboard.lessonsLeft')}{' '}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ padding: 0 }}
            direction="column"
            alignItems="center"
          >
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{
                width: '80%',
                margin: '0 auto',
                marginTop: '65px',
                gap: '15px',
              }}
            >
              <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                sx={{ width: '100%' }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '24px',
                  }}
                >
                  {t('StudentsDashboard.profile')}
                </Typography>
                <IconButton>
                  <BorderColorIcon />
                </IconButton>
              </Grid>
              <Grid
                container
                justifyContent="center"
                direction="column"
                alignItems="center"
                gap={1}
              >
                <img
                  className={css.profileImg}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLojznEgsE6R1gnMuDIWkyUczlbAwu8kmYnHCAG4d9&s"
                  alt=""
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '20px',
                  }}
                >
                  {el.name}
                </Typography>
              </Grid>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid
                  item
                  sx={{
                    width: '100%',
                    height: '290px',
                  }}
                >
                  <CalendarPicker
                    date={date}
                    onChange={(newDate) => setDate(newDate)}
                  />
                </Grid>
              </LocalizationProvider>
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: '24px',
                  lineHeight: '29px',
                }}
              >
                {t('StudentsDashboard.yourProgress')}
              </Typography>
              <Grid item container gap={1} sx={{ width: '100%' }}>
                {el.progress.map((item) => (
                  <StudentsProgressItem
                    done={item.done}
                    title={item.title}
                    classes={item.classes}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default StudentsDashboard;
