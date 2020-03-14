import React, {useEffect} from 'react';
import {Route} from 'react-router-dom'
import {getToken} from './utils/Api'
import ProtectedRoute from './utils/ProtectedRoute'
import Signin from './components/Signin'
import Account from './components/Account'
import Edit from './components/Edit'
import FriendDetails from './components/FriendDetails'
import Logout from './components/Logout'
import Nav from './components/Nav'
import './App.css';
import Add from './components/Add'

function App() {

  const signedIn = getToken()


  return (
    <div className="App">
      <Nav signedIn={signedIn}/>
      <Route exact path='/signin' component={Signin}/>
      <ProtectedRoute exact path='/account' component={Account}/>
      <ProtectedRoute exact path='/add' component={Add}/>
      <ProtectedRoute exact path='/edit/:id' component={Edit}/>
      <ProtectedRoute exact path='/friend/:id' component={FriendDetails}/>
      <ProtectedRoute exact path='/logout' component={Logout}/>
    </div>
  );
}

export default App;
