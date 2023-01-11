import React from 'react';
import PageContainer from '../../../components/PageContainer/PageContainer';
import InfoBlock from '../../../components/InfoBlock/InfoBlock';
import { useTranslation } from 'react-i18next';
import { info } from '../../../constants/infoBlock';

const StudentInfoPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer
      btnText={t('StudentData.change')}
      name={t('StudentData.title')}
      puth="/changeStudent"
      isGoBack
    >
      <InfoBlock info={info} />
    </PageContainer>
  );
};

export default StudentInfoPage;
