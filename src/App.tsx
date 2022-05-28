import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateRecord } from './components/CreateRecord';
import { Filter } from './components/Filter';
import { Navbar } from './components/Navbar';
import { RecordBrowser } from './components/RecordBrowser';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <RecordBrowser />
        } />
        <Route path='/create' element={
          <CreateRecord />
        } />
        <Route path='/test' element={
          <Filter />
        } />
      </Routes>
    </Router>
  );
}

export default App;
