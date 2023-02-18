import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthUser } from './redux/authSlice';
import { getAccessToken } from './utils/local-storage';

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (getAccessToken()) {
      dispatch(fetchAuthUser());
    }
  }, []);

  return (
    <div>
      <span>Hello {authUser ? authUser.email : 'world'}</span>
    </div>
  );
}

export default App;
