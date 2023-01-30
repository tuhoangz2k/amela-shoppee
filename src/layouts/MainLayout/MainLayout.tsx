import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
