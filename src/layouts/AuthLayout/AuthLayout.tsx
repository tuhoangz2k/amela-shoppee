import Footer from 'components/Footer';
import AuthHeader from 'components/AuthHeader';

const AuthLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <AuthHeader />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
