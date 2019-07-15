import React from 'react';
import './App.css';
import FiltersSection from './components/FiltersSection';
import ResultsSection from './components/ResultsSection';

function App() {
  return (
    <div className="App">
      <FiltersSection />
      <ResultsSection />
    </div>
  );
}

export default App;