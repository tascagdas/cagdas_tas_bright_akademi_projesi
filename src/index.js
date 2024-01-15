import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { Provider } from "react-redux"
import configureStore from "../src/redux/store.js";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


