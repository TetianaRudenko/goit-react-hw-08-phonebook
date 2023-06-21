import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import { ThemeProvider } from "styled-components";
import { theme } from "./components/constants/index";
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <BrowserRouter basename='/goit-react-hw-08-phonebook'>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
       </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
