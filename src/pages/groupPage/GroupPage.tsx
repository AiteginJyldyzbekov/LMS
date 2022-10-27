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

const GroupPage: FC = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value);
  };
  const handler = (e: React.ChangeEvent<HTMLInputElement>, state: any) => {
    state(e.target.value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        background: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Grid
        alignItems="center"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '70%',
        }}
      >
        <Typography component="h5" variant="h5">
          Group data
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
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data}
                label="Department"
                onChange={handleChange}
              >
                <MenuItem value="frontend">
                  {t('CreateGroupPage.front')}
                </MenuItem>
                <MenuItem value="backend">{t('CreateGroupPage.back')}</MenuItem>
                <MenuItem value="uxuidesign">
                  {t('CreateGroupPage.uxui')}
                </MenuItem>
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
              <TextField value={groupName} label="Group Name" />
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
              <TextField value={startDate} label="Start Date" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">
                {t('CreateGroupPage.mentor')}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data}
                label="Mentor"
                onChange={handleChange}
              >
                <MenuItem value="frontend">
                  {t('CreateGroupPage.amanAnuar')}
                </MenuItem>
                <MenuItem value="backend">{t('CreateGroupPage.ulan')}</MenuItem>
                <MenuItem value="uxuidesign">
                  {t('CreateGroupPage.aziz')}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">
                {t('CreateGroupPage.status')}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value="frontend">
                  {t('CreateGroupPage.high')}
                </MenuItem>
                <MenuItem value="backend">
                  {t('CreateGroupPage.medium')}
                </MenuItem>
                <MenuItem value="uxuidesign">
                  {t('CreateGroupPage.low')}
                </MenuItem>
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
  );
};

export default GroupPage;
