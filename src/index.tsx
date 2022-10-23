import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App';
import theme from './theme';
import './i18n/i18next';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
