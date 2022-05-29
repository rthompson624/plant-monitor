import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateRecord } from './components/CreateRecord';
import { Navbar } from './components/Navbar';
import { RecordBrowser } from './components/RecordBrowser';
import { PlantObservation, PlantType } from './models/observation';

function App() {
  const [filter, setFilter] = React.useState<string>('all');
  const [observations, setObservations] = React.useState<PlantObservation[]>([]);
  const [filteredObservations, setFilteredObservations] = React.useState<PlantObservation[]>([]);

  // Application load event
  React.useEffect(() => {
    getObservations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getObservations() {
    const response = await fetch('/observation-mock-empty.json');
    if (response.ok) {
      const records: PlantObservation[] = await response.json();
      records.sort((a, b) => a.date.localeCompare(b.date));
      setObservations(records);
      setFilteredObservations(records);
    } else {
      const errorMessage = `Error fetching observation records. Status: ${response.status}. ${response.statusText}`;
    }
  }

  React.useEffect(() => {
    determineFilteredRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, observations]);

  function determineFilteredRecords() {
    // Determine filtered records
    let filteredRecords: PlantObservation[] = JSON.parse(JSON.stringify(observations));
    switch (filter) {
      case 'all':
        // Nothing to do
        break;
      case 'arugula':
        filteredRecords = filteredRecords.filter(observation => observation.type === 'arugula');
        break;
      case 'kale':
        filteredRecords = filteredRecords.filter(observation => observation.type === 'kale');
        break;
      case 'basil':
        filteredRecords = filteredRecords.filter(observation => observation.type === 'basil');
        break;
      default:
        break;
    }
    setFilteredObservations(filteredRecords);
  }

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <RecordBrowser filter={ filter } setFilter={ setFilter } observations={ filteredObservations } />
        } />
        <Route path='/create' element={
          <CreateRecord setObservations={ setObservations } />
        } />
        <Route path='/test' element={
          <div></div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
