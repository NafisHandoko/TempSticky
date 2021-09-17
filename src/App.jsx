import React from 'react';
import './App.css';
import Nav from './Nav/index';
import Note from './Note/index';

function App() {
  return (
    <>
      <Nav/>
      <div class="body-container">
        <Note title="tesaja" body="halohalohalo" bgcolor="yellow"/>
        <Note title="halo dunia" body="ini noteku yang lain" bgcolor="green"/>
      </div>
    </>
  );
}

export default App;