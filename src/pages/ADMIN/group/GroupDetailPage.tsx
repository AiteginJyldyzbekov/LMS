import { Grid, TableCell, TableRow, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import PageContainer from '../../../components/PageContainer/PageContainer';
import TableContainer from '../../../components/TableContainer/TableContainer';
import GroupStudentTable from '../../../components/Tables/GroupStudentTable';
import { useAppDispatch } from '../../../hooks/hook';
import { useSelectorGroup } from '../../../store/selectors';
import { getGroup } from '../../../store/slices/GroupSlice';
import { StudentType } from '../../../types/index.dto';
import GroupInformation from './GroupInformation';

const GroupPageDetail: React.FC = () => {
  const { t } = useTranslation();
  const { result, loading } = useSelectorGroup();
  const dispatch = useAppDispatch();

  type ParamsType = {
    id: string;
  };

  const { id } = useParams() as ParamsType;

  useEffect(() => {
    dispatch(getGroup(id));
  }, []);

  const studentsArr = result?.students;

  const renderList = useMemo(
    () =>
      studentsArr?.map((row: StudentType) => (
        <GroupStudentTable key={row.id} {...row} />
      )),
    [studentsArr]
  );

  return (
    <PageContainer
      name=""
      puth="/createStudent"
      btnText={t('AdminGroup.btnText')}
      isGoBack
      isDetail
      isDetailId={id}
    >
      <Grid
        sx={{
          marginBottom: '20px',
        }}
      >
        <GroupInformation />
      </Grid>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
        }}
      >
        {t('AdminGroup.title')}
      </Typography>
      <TableContainer
        isLoading={loading}
        Header={
          <TableRow>
            <TableCell>{t('AdminGroup.id')}</TableCell>
            <TableCell>{t('AdminGroup.name')}</TableCell>
            <TableCell align="center">{t('AdminGroup.age')}</TableCell>
            <TableCell align="center">{t('AdminGroup.number')}</TableCell>
            <TableCell align="center">{t('AdminGroup.mail')}</TableCell>
            <TableCell align="center">{t('AdminGroup.points')}</TableCell>
            <TableCell align="right">{t('AdminGroup.date')}</TableCell>
          </TableRow>
        }
        Body={renderList}
      />
    </PageContainer>
  );
};

export default GroupPageDetail;
