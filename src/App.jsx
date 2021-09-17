import React from 'react';
import './App.css';
import Nav from './Nav/index';
import Note from './Note/index';
import AddButton from './AddButton/index';

function App() {
  return (
    <>
      <Nav/>
      <div className="body-container">
        <Note title="tesaja" body="halohalohalo" bgcolor="yellow"/>
        <Note title="halo dunia" body="ini noteku yang lain" bgcolor="green"/>
        <AddButton/>
      </div>
    </>
  );
}

export default App;