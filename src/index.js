import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import LoadingContextProvider from "./contexts/LoadingContext";
import "tw-elements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadingContextProvider>
        <App />
      </LoadingContextProvider>
    </Provider>
  </React.StrictMode>
);
