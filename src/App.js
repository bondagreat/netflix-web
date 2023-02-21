import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthUser } from './redux/authSlice';

import useLoading from './hooks/useLoading';
import Router from './routes/Router';
import Spinner from './components/Spinner';
import { getAccessToken } from './utils/local-storage';
// import Header from "./layouts/Header";

export default function App() {
  const { loading } = useLoading();

  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (getAccessToken()) {
      dispatch(fetchAuthUser());
    }
  }, []);

  return (
    <>
      {/* <div>
        <Header />
      </div> */}
      {loading && <Spinner />}
      <Router />
    </>
  );
}
