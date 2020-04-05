import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './containers/Login';
import FEC from './containers/FEC';
import Public from './containers/Public';
import Account from './containers/AccountCenter';
import PrivateRoute from './hoc/PrivateRoute';
import Auth from './auth/Auth';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Custom Mui Theme for our project
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2c3ff3'
    },
    secondary: {
      main: '#999'
    },
    error: {
      main: '#f44336'
    }
  }
})
function App() {
    return (
      <ThemeProvider theme={theme}>
        <Auth>
          {/* Auth get the value sent from the AuthContext.Provider */}
          <BrowserRouter>
            <Switch>
              <PrivateRoute path="/fec" component={FEC} />
              <PrivateRoute path="/account_center" component={Account} />
              <Route path="/public" component={Public} /> 
              <Route path="/login" component={Login} /> 
              <Route path="/" component={FEC} /> 
            </Switch>
          </BrowserRouter>
        </Auth>
      </ThemeProvider>
    )
}

export default App;
