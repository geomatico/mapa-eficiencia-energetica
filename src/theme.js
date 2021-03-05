import {createMuiTheme} from '@material-ui/core/styles';

import '@fontsource/montserrat';
import {blue} from '@material-ui/core/colors';

const GEOMATICOLOR = '#D9419E';

const theme = (type) => createMuiTheme({
  palette: {
    type: type ? type : 'light',
    primary: {
      main: GEOMATICOLOR,
      contrastText: '#fff',
    },
    secondary: {
      main: blue[500],
    },
    text: {
      primary: '#000000',
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: 24,
      fontWeight: 700,
      color: GEOMATICOLOR
    },
    h2: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    button: {
      fontSize: 12,
      letterSpacing: 1.2,
      fontWeight: 'bold'
    },
    caption: {
      fontSize: 11,
    }
  }
});

export default theme;
