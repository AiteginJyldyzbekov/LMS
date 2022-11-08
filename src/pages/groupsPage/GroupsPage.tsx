import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../components/PageContainer/PageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';
import GroupTable from '../../components/Tables/GroupTable';

const createData = (
  id: number,
  name: string,
  department: string,
  date: string,
  amount: number,
  duration: number
) => ({ id, name, department, date, amount, duration });
// TODO: test data, should be removed after implementing with BE
const rows = [
  createData(1, 'Frozen yoghurt', 'React', '22.11.2000', 24, 4.0),
  createData(2, 'Ice cream sandwich', 'Node,js', '22.11.2000', 37, 4.3),
  createData(3, 'Eclair', 'Desighn', '22.11.2000', 24, 6.0),
  createData(4, 'Cupcake', 'Python', '22.11.2000', 67, 4.3),
  createData(5, 'Gingerbread', 'Java', '22.11.2000', 49, 3.9),
];

const GroupsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer
      name={t('Groups.title')}
      puth="/createGroup"
      btnText={t('Groups.addGroup')}
    >
      <TableContainer
        Header={
          <TableRow>
            <TableCell>{t('Groups.id')}</TableCell>
            <TableCell>{t('Groups.department')}</TableCell>
            <TableCell>{t('Groups.name')}</TableCell>
            <TableCell align="right">{t('Groups.startDate')}</TableCell>
            <TableCell align="right">{t('Groups.amount')}</TableCell>
            <TableCell align="right">{t('Groups.duration')}</TableCell>
            <TableCell align="right" />
          </TableRow>
        }
        Body={rows.map((row) => (
          <GroupTable key={row.id} {...row} />
        ))}
      />
    </PageContainer>
  );
};

export default GroupsPage;
