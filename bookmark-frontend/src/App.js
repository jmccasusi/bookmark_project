import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import NewFormComponent from './components/NewFormComponent';
import ShowComponent from './components/ShowComponent';

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <hr/>
        <NewFormComponent/>
        <hr/>
        <ShowComponent/>
    </div>
  );
}

export default App;
