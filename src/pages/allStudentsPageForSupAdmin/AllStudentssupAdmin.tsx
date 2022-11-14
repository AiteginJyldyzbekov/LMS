import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../components/PageContainer/PageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';
import StudentsTable from '../../components/Tables/Studentstable';

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

const AllStudentssupAdmin: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer name={t('AllStudents.title')} puth="/students">
      <TableContainer
        isFilter
        Header={
          <TableRow>
            <TableCell align="left">{t('AllStudents.studentsId')}</TableCell>
            <TableCell align="center">{t('AllStudents.department')}</TableCell>
            <TableCell align="center">{t('AllStudents.groupName')}</TableCell>
            <TableCell align="center">{t('AllStudents.name')}</TableCell>
            <TableCell align="center">{t('AllStudents.number')}</TableCell>
            <TableCell align="center">{t('AllStudents.mail')}</TableCell>
            <TableCell align="center">{t('AllStudents.age')}</TableCell>
            <TableCell align="center">{t('AllStudents.point')}</TableCell>
            <TableCell align="center" />
          </TableRow>
        }
        Body={rows.map((row) => (
          <StudentsTable {...row} />
        ))}
      />
    </PageContainer>
  );
};

export default AllStudentssupAdmin;
