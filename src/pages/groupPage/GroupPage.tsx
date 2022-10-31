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
import MainPageContainer from '../mainPageContainer/MainPageContainer';

const GroupPage: FC = () => {
  const [data, setData] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
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
            {t('CreateGroupPage.groupDate')}
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
                  {t('CreateGroupPage.department')}
                </InputLabel>
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
                <InputLabel id="demo-simple-select-label">
                  {t('CreateGroupPage.mentor')}
                </InputLabel>
                <Select value={data} label="Mentor" onChange={handleChange}>
                  <MenuItem value="nothing" />
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl required fullWidth>
                <InputLabel id="demo-simple-select-label">
                  {t('CreateGroupPage.status')}
                </InputLabel>
                <Select value={data} label="Status" onChange={handleChange}>
                  <MenuItem value="nothing" />
                </Select>
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
                {t('CreateGroupPage.save')}
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
                {t('CreateGroupPage.delete')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MainPageContainer>
  );
};

export default GroupPage;
