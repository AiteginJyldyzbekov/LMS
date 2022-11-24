import { TableCell, TableRow } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../components/PageContainer/PageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';
import MentorsTable from '../../components/Tables/MentorsTable';
import { useAppDispatch } from '../../hooks/hook';
import { useSelectorMentors } from '../../store/selectors';
import { getMentors } from '../../store/slices/MentorsSlice';

const AdminMentorsPage: React.FC = () => {
  const { t } = useTranslation();
  const { result, loading } = useSelectorMentors();
  const d = useAppDispatch();

  useEffect(() => {
    d(getMentors());
  }, []);

  const renderList = useMemo(
    () => result.map((row) => <MentorsTable key={row.id} {...row} />),
    [result]
  );

  return (
    <PageContainer
      name={t('Mentors.title')}
      btnText={t('Mentors.btnText')}
      puth="/createMentor"
    >
      <TableContainer
        isLoading={loading}
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
        Body={renderList}
      />
    </PageContainer>
  );
};

export default AdminMentorsPage;
