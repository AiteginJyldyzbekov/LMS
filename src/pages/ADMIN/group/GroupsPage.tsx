import { TableCell, TableRow } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../../components/PageContainer/PageContainer';
import TableContainer from '../../../components/TableContainer/TableContainer';
import GroupTable from '../../../components/Tables/GroupTable';
import { useAppDispatch } from '../../../hooks/hook';
import { useSelectorGroups } from '../../../store/selectors';
import { getAllGroups } from '../../../store/slices/GroupSlice';

const GroupsPage: React.FC = () => {
  const { t } = useTranslation();
  const { result, loading } = useSelectorGroups();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGroups());
  }, []);

  const renderList = useMemo(
    () => result.map((row) => <GroupTable key={row.id} {...row} />),
    [result]
  );

  return (
    <PageContainer
      name={t('Groups.title')}
      puth="/createGroup"
      btnText={t('Groups.addGroup')}
    >
      <TableContainer
        isLoading={loading}
        isFilter
        Header={
          <TableRow>
            <TableCell>{t('Groups.id')}</TableCell>
            <TableCell>{t('Groups.department')}</TableCell>
            <TableCell>{t('Groups.name')}</TableCell>
            <TableCell align="right">{t('Groups.startDate')}</TableCell>
            <TableCell align="right">{t('Groups.amount')}</TableCell>
            <TableCell align="right">{t('Groups.duration')}</TableCell>
            <TableCell align="right">{t('Groups.status')}</TableCell>
          </TableRow>
        }
        Body={renderList}
      />
    </PageContainer>
  );
};

export default GroupsPage;
