import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState({ msg: '', type: '' });

  const showAlert = (msg, type) => {
    setAlert({
      msg,
      type,
    });

    setTimeout(() => {
      setAlert({
        msg: '',
        type: '',
      });
    }, 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            {alert && alert.msg && alert.type && <Alert alert={alert} />}
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    <Search setAlert={showAlert} />
                    <Users />
                  </>
                )}
              />
              <Route exact path="/user/:login" component={User} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
