import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t('LMS')}</div>
    </div>
  );
};

export default HomePage;
