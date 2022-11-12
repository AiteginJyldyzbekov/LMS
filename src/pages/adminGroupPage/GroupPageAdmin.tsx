import { Grid, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../components/PageContainer/PageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';
import GroupStudentTable from '../../components/Tables/GroupStudentTable';

const createData = (
  id: number,
  name: string,
  number: number,
  mail: string,
  age: number | string,
  point: number | string,
  date: string
) => ({ id, name, number, mail, age, point, date });
// TODO: test data, should be removed after implementing with BE
const rows = [
  createData(1, 'Solid', +996010101, 'test@gmail.com', 17, 100, '4 November'),
];

const GroupPageAdmin: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer
      name={t('AdminGroup.title')}
      puth="/createStudent"
      btnText={t('AdminGroup.btnText')}
      isGoBack
    >
      <Grid
        sx={{
          marginBottom: '20px',
        }}
      >
        <Typography
          textAlign="left"
          component="p"
          sx={{
            fontSize: '20px',
            fontWeight: '400',
          }}
        >
          {t('AdminGroup.group')}: Design
        </Typography>
        <Typography
          textAlign="left"
          component="p"
          sx={{
            fontSize: '20px',
            fontWeight: '400',
          }}
        >
          {t('AdminGroup.mentor')}: Aziz Azizovich
        </Typography>
      </Grid>
      <TableContainer
        Header={
          <TableRow>
            <TableCell>{t('AdminGroup.id')}</TableCell>
            <TableCell>{t('AdminGroup.name')}</TableCell>
            <TableCell align="center">{t('AdminGroup.age')}</TableCell>
            <TableCell align="center">{t('AdminGroup.number')}</TableCell>
            <TableCell align="center">{t('AdminGroup.mail')}</TableCell>
            <TableCell align="center">{t('AdminGroup.points')}</TableCell>
            <TableCell align="right">{t('AdminGroup.date')}</TableCell>
            <TableCell align="right" />
            <TableCell align="right" />
          </TableRow>
        }
        Body={rows.map((row) => (
          <GroupStudentTable key={row.id} {...row} />
        ))}
      />
    </PageContainer>
  );
};

export default GroupPageAdmin;
