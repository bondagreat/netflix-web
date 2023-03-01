import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'tw-elements';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import LoadingContextProvider from './contexts/LoadingContext';
import 'tw-elements';
import PaymentContextProvider from './contexts/PaymentContext';
import SearchContextProvider from './contexts/SearchUserContext';
import RegisterContextProvider from './contexts/RegisterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadingContextProvider>
        <PaymentContextProvider>
          <SearchContextProvider>
            <RegisterContextProvider>
              <App />
            </RegisterContextProvider>
          </SearchContextProvider>
        </PaymentContextProvider>
      </LoadingContextProvider>
    </Provider>
  </React.StrictMode>
);
