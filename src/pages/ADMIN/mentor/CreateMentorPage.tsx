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
  InputAdornment,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/hook';
import { createMentor } from '../../../store/slices/MentorSlice';
import MainPageContainer from '../../../components/mainPageContainer/MainPageContainer';

const CreateMentor: FC = () => {
  const [data, setData] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [autoGenerate, setAutoGenerate] = useState<string>('');
  const [error, setError] = useState<number>(0);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value);
  };
  const mentor = {
    name,
    direction: 'FrontEnd',
    lastName: surname,
    phoneNumber: number,
    email: mail,
    password: autoGenerate,
    status: '',
  };
  const handler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: (s: string) => void
  ) => {
    setState(e.target.value);
  };
  const handleCreate = () => {
    if (name.length > 0) {
      dispatch(createMentor(mentor));
      navigate('/mentors');
      setError(0);
    } else {
      setError(1);
    }
  };

  return (
    <MainPageContainer isGoBack>
      <Grid alignItems="center">
        <Typography textAlign="center" component="h5" variant="h5">
          {t('CreateMentor.createMentorTitle')}
        </Typography>
        <Grid mt={3} container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">
                {t('CreateMentor.department')}
              </InputLabel>
              <Select
                value={data}
                label={t('CreateMentor.department')}
                onChange={handleChange}
              >
                <MenuItem value="nothing" />
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handler(e, setName)
              }
              required
              fullWidth
            >
              <TextField value={name} label={t('CreateMentor.name')} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handler(e, setSurName)
              }
              required
              fullWidth
            >
              <TextField value={surname} label={t('CreateMentor.surname')} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handler(e, setNumber)
              }
              required
              fullWidth
            >
              <TextField
                value={number}
                label={t('CreateMentor.number')}
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+996</InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handler(e, setMail)
              }
              required
              fullWidth
            >
              <TextField value={mail} label={t('CreateMentor.mail')} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">
                {t('CreateMentor.status')}
              </InputLabel>
              <Select
                value={data}
                label={t('CreateMentor.status')}
                onChange={handleChange}
              >
                <MenuItem value="nothing" />
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handler(e, setAutoGenerate)
              }
              required
              fullWidth
            >
              <TextField
                value={autoGenerate}
                label={t('CreateMentor.autoGenerate')}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={5}>
          <Grid item xs={6} md>
            <Box textAlign="center">
              <Button fullWidth size="large" variant="outlined">
                {t('CreateMentor.delete')}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} md>
            <Box textAlign="center">
              <Button
                fullWidth
                size="large"
                onClick={handleCreate}
                variant="outlined"
                color={error === 0 ? 'primary' : 'error'}
              >
                {t('CreateMentor.save')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </MainPageContainer>
  );
};

export default CreateMentor;
