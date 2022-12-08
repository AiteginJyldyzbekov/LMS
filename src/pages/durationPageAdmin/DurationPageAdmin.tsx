import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainPageContainer from '../../components/mainPageContainer/MainPageContainer';

const DurationPageAdmin: React.FC = () => {
  const [groupName, setGroupName] = useState<string>('');
  const [direction, setDirection] = useState<string>('');

  const { t } = useTranslation();
  return (
    <MainPageContainer isGoBack>
      <Typography textAlign="center" component="h5" variant="h5">
        {t('CreateGroupPage.groupDate')}
      </Typography>
      <Grid mt={3} container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl required fullWidth>
            <InputLabel>{t('Groups.status')}</InputLabel>
            <Select
              value={direction}
              label="Status"
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
            <TextField value={groupName} label={t('Groups.name')} />
          </FormControl>
        </Grid>
      </Grid>
    </MainPageContainer>
  );
};

export default DurationPageAdmin;
