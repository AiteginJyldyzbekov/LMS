import React, { useEffect, useMemo } from 'react';
import { TableRow, TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../../components/PageContainer/PageContainer';
import TableContainer from '../../../components/TableContainer/TableContainer';
import DirectionTable from '../../../components/Tables/DirectionTable';
import { useAppDispatch } from '../../../hooks/hook';
import { useSelectorDirections } from '../../../store/selectors';
import { getDirections } from '../../../store/slices/DirectionSlice';
import { DirectionType } from '../../../types/index.dto';

const DirectionPage: React.FC = () => {
  const { t } = useTranslation();
  const { result, loading } = useSelectorDirections();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDirections());
  }, []);

  const renderList = useMemo(
    () =>
      result.map((item: DirectionType) => (
        <DirectionTable key={item.id} {...item} />
      )),
    [result]
  );

  return (
    <PageContainer
      name={t('DirectionPage.title')}
      puth="/direction/create"
      btnText={t('DirectionPage.addDirection')}
    >
      <TableContainer
        isLoading={loading}
        Header={
          <TableRow>
            <TableCell>{t('DirectionPage.id')}</TableCell>
            <TableCell>{t('DirectionPage.name')}</TableCell>
            <TableCell>{t('DirectionPage.groups')}</TableCell>
            <TableCell>{t('DirectionPage.count')}</TableCell>
            <TableCell align="right" />
          </TableRow>
        }
        Body={renderList}
      />
    </PageContainer>
  );
};

export default DirectionPage;
