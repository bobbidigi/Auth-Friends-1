import React from 'react';
import {Link, Route} from 'react-router-dom'
import {getToken} from '../utils/api'
import ProtectedRoute from './ProtectedRoute'
import './App.css';

function App() {

  const signedIn = getToken()

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
