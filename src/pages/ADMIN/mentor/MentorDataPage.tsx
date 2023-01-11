import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useParams } from 'react-router-dom';
import InfoBlock from '../../../components/InfoBlock/InfoBlock';
import { info } from '../../../constants/infoBlock';
import PageContainer from '../../../components/PageContainer/PageContainer';
import GroupTable from '../../../components/Tables/GroupTable';
import { useSelectorGroups } from '../../../store/selectors';
import TableContainer from '../../../components/TableContainer/TableContainer';
import { getAllGroups } from '../../../store/slices/GroupSlice';
import { useAppDispatch } from '../../../hooks/hook';

const MentorDataPage: React.FC = () => {
  const { t } = useTranslation();
  const { result, loading } = useSelectorGroups();
  const { id } = useParams();
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
      name={t('infoBlock.title')}
      btnText={t('infoBlock.btnText')}
      puth={`/editMentor/${id}`}
    >
      <InfoBlock info={info} />
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
export default MentorDataPage;
