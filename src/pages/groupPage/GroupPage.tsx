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

const GroupPage: FC = () => {
  const [data, setData] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value);
  };
  const handler = (e: React.ChangeEvent<HTMLInputElement>, setState: (s: string) => void) => {
    setState(e.target.value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
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
                Department
              </InputLabel>
              <Select
                value={data}
                label="Department"
                onChange={handleChange}
              >
                <MenuItem value="frontend">
                  Front-End
                </MenuItem>
                <MenuItem value="backend">
                  Back-End
                </MenuItem>
                <MenuItem value="uxuidesign">
                  UX/UI Design
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
                Mentors
              </InputLabel>
              <Select
                value={data}
                label="Mentor"
                onChange={handleChange}
              >
                <MenuItem value="frontend">
                  Anuar/Aman
                </MenuItem>
                <MenuItem value="backend">Ulan</MenuItem>
                <MenuItem value="uxuidesign">
                  Aziz
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">
                Status
              </InputLabel>
              <Select
                value={data}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value="frontend">
                  High
                </MenuItem>
                <MenuItem value="backend">
                  Medium
                </MenuItem>
                <MenuItem value="uxuidesign">
                  Low
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
              Save
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
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GroupPage;
