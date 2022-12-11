import { Grid, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TableContainer from '../../../components/TableContainer/TableContainer';
import StudentBookTable from '../../../components/Tables/StudentBookTable';

const createData = (
  id: number,
  department: string,
  name: string,
  date: string,
  amount: number,
  duration: string
) => ({ id, department, name, date, amount, duration });
// TODO: test data, should be removed after implementing with BE
const rows = [
  createData(1, 'Front-end', 'solid-3', '11 September', 20, '2 month'),
  createData(2, 'Front-end', 'solid-3', '11 September', 20, '2 month'),
  createData(3, 'Front-end', 'solid-3', '11 September', 20, '2 month'),
];

const GroupsPageMentor: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography
        textAlign="center"
        component="p"
        sx={{
          fontSize: '30px',
          fontWeight: '400',
          marginTop: '30px',
        }}
      >
        {t('GroupsPageMentor.title')}
      </Typography>
      <Grid
        sx={{
          paddingRight: '60px',
          paddingLeft: '60px',
          marginTop: '30px',
          '@media (max-width: 1200px)': {
            paddingRight: '40px',
            paddingLeft: '40px',
          },
          '@media (max-width: 768px)': {
            paddingRight: '20px',
            paddingLeft: '20px',
          },
          '@media (max-width: 375px)': {
            paddingRight: '10px',
            paddingLeft: '10px',
          },
        }}
      >
        <TableContainer
          isLoading={false}
          Header={
            <TableRow>
              <TableCell>{t('GroupsPageMentor.id')}</TableCell>
              <TableCell align="center">
                {t('GroupsPageMentor.department')}
              </TableCell>
              <TableCell align="center">{t('GroupsPageMentor.name')}</TableCell>
              <TableCell align="center">{t('GroupsPageMentor.date')}</TableCell>
              <TableCell align="center">
                {t('GroupsPageMentor.amount')}
              </TableCell>
              <TableCell align="center">
                {t('GroupsPageMentor.duration')}
              </TableCell>
            </TableRow>
          }
          Body={rows.map((row) => (
            <StudentBookTable {...row} />
          ))}
        />
      </Grid>
    </>
  );
};

export default GroupsPageMentor;
