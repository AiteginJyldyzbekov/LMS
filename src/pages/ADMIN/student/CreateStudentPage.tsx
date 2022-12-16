import React, { useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import MainPageContainer from '../../../components/mainPageContainer/MainPageContainer';
import useStyles from './StudentPage.style';
import { useAppDispatch } from '../../../hooks/hook';
import { createStudent } from '../../../store/slices/AllStudentsSlice';
import { StudentType } from '../../../types/index.dto';
import { useNavigate } from 'react-router-dom';

import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';

const CreateStudentPage: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [age, setAge] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const [error, setError] = useState(0);

  const student = {
    name,
    surname,
    phoneNumber: number,
    email: mail,
    age,
    price,
    createdAt: date,
    status
  }

  const handleCreate = () => {
    if (name.length > 0) {
      dispatch(createStudent(student as unknown as StudentType));
      navigate('/');
      setError(0);
    } else {
      setError(1);
    }
  }

  const searchRegExp = /\//g;

  const newDate = new Date().toLocaleDateString("en-US");
  const today = newDate.replace(searchRegExp, '-')
  const splitDate = today.split("-");
  const finalDate = [splitDate[2], splitDate[0], splitDate[1]].join('-')


  const generatePass = () => {
    const numberChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const allChars = numberChars + upperChars + lowerChars;

    let randomString = '';

    for (let i = 0; i < 12; i++) {
      const randomNumber = Math.floor(Math.random() * allChars.length);
      randomString += allChars[randomNumber];
    }
    setPass(randomString);
  };

  useEffect(() => {
    generatePass();
  }, []);

  return (
    <MainPageContainer isGoBack>
      <div className={classes.container}>
        <h1 className={classes.title}>{t('StudentPage.title')}</h1>
        <div className={classes.inputsContainer}>
          <TextField
            sx={{ width: '40%' }}
            id="outlined-basic"
            label="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ width: '40%' }}
            id="outlined-basic"
            label="Surname"
            onChange={(e) => setSurname(e.target.value)}
          />
          <TextField
            sx={{ width: '40%' }}
            id="outlined-basic"
            label="Number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <TextField
            sx={{ width: '40%' }}
            id="outlined-basic"
            label="Mail"
            onChange={(e) => setMail(e.target.value)}
          />
          <TextField
            sx={{ width: '40%' }}
            id="outlined-basic"
            label="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue={finalDate}
            sx={{ width: '40%' }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            sx={{ width: '40%' }}
            id="outlined-basic"
            label="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            sx={{ width: '40%' }}
            id="outlined-basic"
            label="Generate password"
            value={pass}
          />
          <FormControl sx={{ m: 1, width: '35%' }}>
            <InputLabel
              id="demo-multiple-name-label">
              {t('StudentPage.status')}
            </InputLabel>
            <Select
              onChange={(e: SelectChangeEvent<string>) => {
                setStatus(e.target.value);
              }}
              labelId="demo-multiple-name-label" id="demo-multiple-name">
              <MenuItem />
            </Select>
          </FormControl>
        </div>
        <div className={classes.btnsContainer}>
          <Button
            onClick={() => handleCreate()}
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
