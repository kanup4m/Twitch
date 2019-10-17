import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Games from './Components/Games'
import Header from './Components/Header'
import Streams from './Components/Streams';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Games} />
      <Route path='top=streams' component={Streams} />
    </Router>
  );
}

export default App;
