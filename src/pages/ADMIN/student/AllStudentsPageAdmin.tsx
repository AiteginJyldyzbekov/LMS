import { TableCell, TableRow } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../../components/PageContainer/PageContainer';
import TableContainer from '../../../components/TableContainer/TableContainer';
import StudentsTable from '../../../components/Tables/Studentstable';
import { useAppDispatch } from '../../../hooks/hook';
import { useSelectorAllStudents } from '../../../store/selectors';
import { getAllStudents } from '../../../store/slices/AllStudentsSlice';

const AllStudentsPageAdmin: React.FC = () => {
  const { t } = useTranslation();
  const { result, loading } = useSelectorAllStudents();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

  const renderList = useMemo(
    () => result.map((row) => <StudentsTable key={row.id} {...row} />),
    [result]
  );

  return (
    <PageContainer name={t('AllStudents.title')} puth="/students">
      <TableContainer
        isLoading={loading}
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
            {/* <TableCell align="center" /> */}
          </TableRow>
        }
        Body={renderList}
      />
    </PageContainer>
  );
};

export default AllStudentsPageAdmin;
