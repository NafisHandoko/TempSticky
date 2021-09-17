import React from 'react';
import './App.css';
import Nav from './Nav/index';
import Note from './Note/index';

function App() {
  return (
    <>
      <Nav/>
      <Note title="tesaja" body="halohalohalo" bgcolor="yellow"/>
    </>
  );
}

export default App;