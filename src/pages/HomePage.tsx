import React from 'react';
import { useTranslation } from 'react-i18next';
import ViewPage from '../components/pageContainer/PageContainer';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ViewPage name="User" puth="*" btn_text="Click here">
        <h1>{t('LMS')}</h1>
      </ViewPage>
    </div>
  );
};

export default HomePage;
