import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import { App } from 'components/App';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { myTheme } from './myTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MUIThemeProvider theme={myTheme}>
              <App />
            </MUIThemeProvider>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
