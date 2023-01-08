import React from 'react';
import { useTranslation } from 'react-i18next';
import InfoBlock from '../../../components/InfoBlock/InfoBlock';
import { info } from '../../../constants/infoBlock';
import PageContainer from '../../../components/PageContainer/PageContainer';

const MentorDataPage = () => {
  const { t } = useTranslation();
  return (
    <PageContainer
      name={t('infoBlock.btnText')}
      btnText={t('infoBlock.btnText')}
      puth="/editMentor/1"
    >
      <InfoBlock info={info} />
    </PageContainer>
  );
};
export default MentorDataPage;
