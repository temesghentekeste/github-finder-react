import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import User from './components/users/User';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

const App = () => (
  <GithubState>
    <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user/:login" component={User} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
  </GithubState>
);

export default App;
