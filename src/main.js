import ReactDOM from 'react-dom';
import React from 'react';

import {Provider} from 'react-redux';
import store from './store';

import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import Cabecera from './components/Cabecera';
import {Box} from '@material-ui/core';
import Mapa from './components/Mapa';

const App = () => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme()}>
        <CssBaseline/>
        <Box>
          <Cabecera/>
          <Mapa/>
        </Box>
      </ThemeProvider>
    </Provider>
  );
};

const target = document.getElementById('app');
if (target) ReactDOM.render(<App />, target);

export default App;
