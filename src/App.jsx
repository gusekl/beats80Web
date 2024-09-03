import './App.css';
import {Navbar} from './components';
import Body from './components/body/body';
import modules from './util/modules.json';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar modules={modules.modules}/>
      <Body/>
    </div>
    </Router>
  );
}

export default App;
