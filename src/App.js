import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'flowbite';
import useLoading from './hooks/useLoading';
import Router from './routes/Router';
import Spinner from './components/Spinner';
import { getAccessToken } from './utils/local-storage';
import { fetchAuthUser } from './redux/profileSlice';

export default function App() {
  const { loading } = useLoading();

  const dispatch = useDispatch();

  useEffect(() => {
    if (getAccessToken()) {
      dispatch(fetchAuthUser());
    }
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Router />
    </>
  );
}
