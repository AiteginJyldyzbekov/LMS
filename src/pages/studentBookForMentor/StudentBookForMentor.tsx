import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../components/PageContainer/PageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';
import StudentsBookMentorTable from '../../components/Tables/StudentBookMentorTable';

const createData = (
  id: string | number,
  department: string,
  groupName: string,
  name: string,
  number: string | number,
  mail: string,
  age: number,
  point: number
) => ({ id, department, groupName, name, number, mail, age, point });

const rows = [
  createData(
    1,
    'Front-End',
    'Amans',
    'Azos wordl',
    450546554,
    'azizLybitParney@mail.ru',
    13,
    66
  ),
  createData(
    2,
    'Front-End',
    'Amans',
    'Amin toyxsjnx',
    '0500353521',
    'azizLybitParney@mail.ru',
    13,
    66
  ),
  createData(
    3,
    'Front-End',
    'Amans',
    'Autegin auteginvo',
    5646545465,
    'azizLybitParney@mail.ru',
    13,
    66
  ),
  createData(
    4,
    'Front-End',
    'Amans',
    'amanHTML hello',
    '0500353521',
    'azizLybitParney@mail.ru',
    13,
    66
  ),
];

const StudentBookForMentor: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer name={t('StudentBook.title')} puth="/students">
      <TableContainer
        Header={
          <TableRow>
            <TableCell align="left">{t('StudentBook.studentsId')}</TableCell>
            <TableCell align="center">{t('StudentBook.department')}</TableCell>
            <TableCell align="center">{t('StudentBook.groupName')}</TableCell>
            <TableCell align="center">{t('StudentBook.name')}</TableCell>
            <TableCell align="center">{t('StudentBook.number')}</TableCell>
            <TableCell align="center">{t('StudentBook.mail')}</TableCell>
            <TableCell align="center">{t('StudentBook.age')}</TableCell>
            <TableCell align="center">{t('StudentBook.point')}</TableCell>
            <TableCell align="center" />
          </TableRow>
        }
        Body={rows.map((row) => (
          <StudentsBookMentorTable {...row} />
        ))}
      />
    </PageContainer>
  );
};

export default StudentBookForMentor;
