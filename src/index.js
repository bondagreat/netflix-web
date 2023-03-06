import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'tw-elements';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import LoadingContextProvider from './contexts/LoadingContext';
import 'tw-elements';
import SearchUserContextProvider from './contexts/SearchUserContext';
import RegisterContextProvider from './contexts/RegisterContext';
import { getAccessToken } from './utils/local-storage';
import { fetchAuthUser } from './redux/authSlice';

if (getAccessToken()) {
  store.dispatch(fetchAuthUser());
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadingContextProvider>
        <SearchUserContextProvider>
          <RegisterContextProvider>
            <App />
          </RegisterContextProvider>
        </SearchUserContextProvider>
      </LoadingContextProvider>
    </Provider>
  </React.StrictMode>
);
