import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import FriendsPage from './components/Friends';
import {ProtectedRoute} from './ProtectRoute';




function App() {

  const state = useSelector( state => state);

  console.log(state);
  return (
    <Router>
    <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/friends" component={FriendsPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
