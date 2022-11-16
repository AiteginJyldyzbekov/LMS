import React, { FC, useState } from 'react';
import {
  Typography,
  Grid,
  Select,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { days } from '../../constants/days';
import DaysItem from './daysItem/DaysItem';
import MainPageContainer from '../../components/mainPageContainer/MainPageContainer';

const GroupPage: FC = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value);
  };
  const handler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: (s: string) => void | string
  ) => {
    setState(e.target.value);
  };
  return (
    <MainPageContainer isGoBack>
      <Typography textAlign="center" component="h5" variant="h5">
        {t('CreateGroupPage.groupDate')}
      </Typography>
      <Grid mt={3} container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl required fullWidth>
            <InputLabel>{t('CreateGroupPage.department')}</InputLabel>
            <Select value={data} label="Department" onChange={handleChange}>
              <MenuItem value="nothing" />
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handler(e, setGroupName)
            }
            required
            fullWidth
          >
            <TextField
              value={groupName}
              label={t('CreateGroupPage.groupName')}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handler(e, setStartDate)
            }
            required
            fullWidth
          >
            <TextField
              value={startDate}
              label={t('CreateGroupPage.startDate')}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl required fullWidth>
            <InputLabel>{t('CreateGroupPage.mentor')}</InputLabel>
            <Select value={data} label="Mentor" onChange={handleChange}>
              <MenuItem value="nothing" />
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl required fullWidth>
            <InputLabel>{t('CreateGroupPage.status')}</InputLabel>
            <Select value={data} label="Status" onChange={handleChange}>
              <MenuItem value="nothing" />
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handler(e, setDuration)
            }
            required
            fullWidth
          >
            <TextField
              value={duration}
              label={t('CreateGroupPage.duration')}
              type="number"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container mt={4} justifyContent="center">
        <Grid
          item
          xs={12}
          sm={5}
          container
          direction="row"
          justifyContent="space-evenly"
        >
          {days.map((el) => (
            <DaysItem id={el.id} name={el.name} />
          ))}
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={6} md>
          <Box textAlign="center">
            <Button size="large" fullWidth variant="outlined">
              {t('CreateGroupPage.delete')}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} md>
          <Box textAlign="center">
            <Button size="large" fullWidth variant="outlined">
              {t('CreateGroupPage.save')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MainPageContainer>
  );
};

export default GroupPage;
