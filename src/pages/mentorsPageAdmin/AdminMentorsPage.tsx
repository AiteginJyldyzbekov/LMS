import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../components/PageContainer/PageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';
import MentorsTable from '../../components/Tables/MentorsTable';

const createData = (
  id: number,
  department: string,
  name: string,
  surname: string,
  number: number
) => ({ id, department, name, surname, number });
// TODO: test data, should be removed after implementing with BE
const rows = [
  createData(1, 'Front-end', 'Aman', 'Asylbekov', +996700010101),
  createData(2, 'Front-end', 'Aman', 'Asylbekov', +996700010101),
  createData(3, 'Front-end', 'Aman', 'Asylbekov', +996700010101),
  createData(4, 'Front-end', 'Aman', 'Asylbekov', +996700010101),
];

const AdminMentorsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer
      name={t('Mentors.title')}
      btnText={t('Mentors.btnText')}
      puth="/createMentor"
    >
      <TableContainer
        Btn={<hr />}
        Header={
          <TableRow>
            <TableCell>{t('Mentors.id')}</TableCell>
            <TableCell>{t('Mentors.department')}</TableCell>
            <TableCell>{t('Mentors.name')}</TableCell>
            <TableCell align="center">{t('Mentors.surname')}</TableCell>
            <TableCell align="center">{t('Mentors.number')}</TableCell>
            <TableCell align="right" />
            <TableCell align="right" />
          </TableRow>
        }
        Body={rows.map((row) => (
          <MentorsTable key={row.id} {...row} />
        ))}
      />
    </PageContainer>
  );
};

export default AdminMentorsPage;
