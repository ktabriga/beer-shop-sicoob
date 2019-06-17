import React, {Component} from 'react';
import Routes from './Routes'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider} from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple,
  },
});

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Routes />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App;
