import React from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from './pageContainer/PageContainer';
import AdminMentorsPage from '../components/mentorsPageAdmin/AdminMentorsPage';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PageContainer name="User" puth="*" btnText="Click here">
        <AdminMentorsPage />
      </PageContainer>
    </div>
  );
};

export default HomePage;
