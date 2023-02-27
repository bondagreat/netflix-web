import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function AuthLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
