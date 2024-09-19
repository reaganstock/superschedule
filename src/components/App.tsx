import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { CssBaseline } from '@mui/material';
import Navbar from './Navigation/Navbar';
import PrivateRoute from './Common/PrivateRoute';
import Dashboard from './Dashboard/Dashboard';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Schedule from './Schedule/Schedule';
import Settings from './Settings/Settings';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/schedule" component={Schedule} />
          <PrivateRoute path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
