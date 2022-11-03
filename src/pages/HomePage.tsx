import React from 'react';
import AdminMentorsPage from '../components/mentorsPageAdmin/AdminMentorsPage';
import PageContainer from '../components/PageContainer/PageContainer';

const HomePage: React.FC = () => (
  <div>
    <PageContainer name="Mentors" puth="*" btnText="Add">
      <AdminMentorsPage />
    </PageContainer>
  </div>
);

export default HomePage;
