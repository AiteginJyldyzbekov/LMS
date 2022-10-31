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
import MainPageContainer from '../mainPageContainer/MainPageContainer';

const CreateMentor: FC = () => {
  const [data, setData] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [autoGenerate, setAutoGenerate] = useState<string>('');

  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value);
  };

  const handler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: (s: string) => void
  ) => {
    setState(e.target.value);
  };
  return (
    <MainPageContainer>
      <Box>
        <Grid
          alignItems="center"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography component="h5" variant="h5">
            {t('CreateMentor.createMentorTitle')}
          </Typography>
          <Grid
            mt={3}
            container
            spacing={3}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
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
          <Grid
            container
            spacing={3}
            mt={5}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Grid
              item
              xs={6}
              md
              sm
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                sx={{
                  width: '45%',
                  minHeight: '50px',
                  display: 'flex',
                  gap: '10px',
                }}
                variant="contained"
                color="success"
              >
                {t('CreateMentor.save')}
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              md
              sm
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                sx={{
                  width: '45%',
                  minHeight: '50px',
                }}
                variant="contained"
                color="error"
              >
                {t('CreateMentor.delete')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MainPageContainer>
  );
};

export default CreateMentor;
