import React, { useMemo } from 'react';
import { TableRow, TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../components/PageContainer/PageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';
import DirectionTable from '../../components/Tables/DirectionTable';

export interface Result {
  id: number;
  name: string;
  group: string;
  countOfStudents: number;
}

const DirectionPage: React.FC = () => {
  const { t } = useTranslation();
  const result: Result[] = [
    {
      id: 1,
      name: 'Anuars',
      group: 'Frontend',
      countOfStudents: 25,
    },
    {
      id: 2,
      name: 'Amans',
      group: 'Backend',
      countOfStudents: 20,
    },
    {
      id: 3,
      name: 'Ulans',
      group: 'Disign UI/UX',
      countOfStudents: 1,
    },
    {
      id: 4,
      name: 'Azizis',
      group: 'Disign UI/UX',
      countOfStudents: 1,
    },
  ];

  const renderList = useMemo(
    () => result.map((item) => <DirectionTable key={item.id} {...item} />),
    [result]
  );

  return (
    <PageContainer
      name={t('DirectionPage.title')}
      puth="/direction"
      btnText={t('DirectionPage.addDirection')}
    >
      <TableContainer
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
