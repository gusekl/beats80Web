import './App.css';
import {Navbar} from './components';
import React from 'react';

function App() {
  return (
    <div className="App">
        <img src={require('./images/Beatslogga.png')} alt='beats logo' height={"128px"}/>
        <h1 className='primary-color'>Här kommer snart Beats 80s helt nya hemsida!</h1>
        <h2 className='primary-color'>Tills dess kan ni följa allt vi gör på vår <a href='https://www.facebook.com/beats.2024'>Facebook</a>!</h2>
    </div>
  );
}

export default App;
