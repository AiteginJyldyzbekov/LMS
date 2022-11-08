import React from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import { inputsData } from '../../constants/StudentPage';
import MainPageContainer from '../mainPageContainer/MainPageContainer';
import useStyles from './StudentPage.style';

const CreateStudentPage: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <MainPageContainer>
      <div className={classes.container}>
        <h1 className={classes.title}>{t('StudentPage.title')}</h1>
        <div className={classes.inputsContainer}>
          {inputsData.map((item) => (
            <TextField
              key={item.placeholder}
              sx={{ width: '40%' }}
              id="outlined-basic"
              label={item.placeholder}
            />
          ))}
          <FormControl sx={{ m: 1, width: '35%' }}>
            <InputLabel id="demo-multiple-name-label">
              {t('StudentPage.status')}
            </InputLabel>
            <Select labelId="demo-multiple-name-label" id="demo-multiple-name">
              <MenuItem />
            </Select>
          </FormControl>
        </div>
        <div className={classes.btnsContainer}>
          <Button
            variant="outlined"
            sx={{
              width: '15%',
              minHeight: '50px',
              marginRight: '5%',
              '@media(max-width: 425px)': {
                fontSize: '12px',
              },
            }}
          >
            {t('StudentPage.save')}
          </Button>
          <Button
            variant="outlined"
            startIcon={
              <DeleteIcon
                sx={{
                  '@media(max-width: 580px)': {
                    width: '12px',
                  },
                }}
              />
            }
            sx={{
              width: '15%',
              minHeight: '50px',
              gap: '0',
              '@media(max-width: 580px)': {
                fontSize: '12px',
              },
            }}
          >
            {t('StudentPage.delete')}
          </Button>
        </div>
      </div>
    </MainPageContainer>
  );
};

export default CreateStudentPage;
