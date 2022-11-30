import { Grid, TableCell, TableRow, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import PageContainer from '../../components/PageContainer/PageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';
import GroupStudentTable from '../../components/Tables/GroupStudentTable';
import { useAppDispatch } from '../../hooks/hook';
import { useSelectorGroup } from '../../store/selectors';
import { getGroup } from '../../store/slices/GroupSlice';

const GroupPageAdmin: React.FC = () => {
  const { t } = useTranslation();
  const { result, loading } = useSelectorGroup();
  const d = useAppDispatch();

  const { id }: any = useParams();

  useEffect(() => {
    d(getGroup(id));
  }, []);

  const Arr = result?.students;

  const renderList = useMemo(
    () => Arr?.map((row: any) => <GroupStudentTable key={row.id} {...row} />),
    [Arr]
  );

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
          {t('AdminGroup.group')}: {result?.name}
        </Typography>
        <Typography
          textAlign="left"
          component="p"
          sx={{
            fontSize: '20px',
            fontWeight: '400',
          }}
        >
          {t('AdminGroup.mentor')}: {result?.direction}
        </Typography>
      </Grid>
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
            <TableCell align="right" />
            <TableCell align="right" />
          </TableRow>
        }
        Body={renderList}
      />
    </PageContainer>
  );
};

export default GroupPageAdmin;
