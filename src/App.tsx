import React from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();
  return <div>{t('LMS')}</div>;
};

export default App;
