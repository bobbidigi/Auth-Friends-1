import React from 'react';
import {Link, Route} from 'react-router-dom'
import {getToken} from './utils/Api'
import ProtectedRoute from './utils/ProtectedRoute'
import Signin from './components/Signin'
import './App.css';

function App() {

  const signedIn = getToken()

  return (
    <div className="App">
      <nav>
				<Link to="/">Home</Link>
				{!signedIn && <Link to="/signin">Sign In</Link>}
				{signedIn && <Link to="/account">My Account</Link>}
				{signedIn && <Link to="/logout">Log Out</Link>}

			</nav>

      <Route exact path='/signin' component={Signin}/>
    </div>
  );
}

export default App;
