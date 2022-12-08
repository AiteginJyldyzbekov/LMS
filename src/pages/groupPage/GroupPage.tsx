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
import { useNavigate } from 'react-router-dom';
import { days } from '../../constants/days';
import DaysItem from './daysItem/DaysItem';
import MainPageContainer from '../../components/mainPageContainer/MainPageContainer';
import { useAppDispatch } from '../../hooks/hook';
import { createGroup } from '../../store/slices/GroupSlice';
import { GroupType } from '../../types/index.dto';

const GroupPage: FC = () => {
  const { t } = useTranslation();
  const [groupName, setGroupName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [direction, setDirection] = useState<string>('');
  const [mentor, setMentor] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<number>(0);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const group = {
    createdAt: startDate,
    name: groupName,
    direction,
    mentor,
    status,
    duration,
    days,
  };

  const handleCreate = () => {
    if (groupName.length > 0) {
      dispatch(createGroup(group as unknown as GroupType));
      navigate('/');
      setError(0);
    } else {
      setError(1);
    }
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
            <Select
              value={direction}
              label="Direction"
              onChange={(e: SelectChangeEvent<string>) => {
                setDirection(e.target.value);
              }}
            >
              <MenuItem value="nothing" />
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setGroupName(e.target.value)
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
              setStartDate(e.target.value)
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
            <Select
              value={mentor}
              label="Mentor"
              onChange={(e: SelectChangeEvent<string>) =>
                setMentor(e.target.value)
              }
            >
              <MenuItem value="nothing" />
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl required fullWidth>
            <InputLabel>{t('CreateGroupPage.status')}</InputLabel>
            <Select
              value={status}
              label="Status"
              onChange={(e: SelectChangeEvent<string>) =>
                setStatus(e.target.value)
              }
            >
              <MenuItem value="nothing" />
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDuration(e.target.value)
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
            <Button
              size="large"
              fullWidth
              variant="outlined"
              onClick={handleCreate}
              color={error === 0 ? 'primary' : 'error'}
            >
              {t('CreateGroupPage.save')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MainPageContainer>
  );
};

export default GroupPage;
