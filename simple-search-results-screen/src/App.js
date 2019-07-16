import React from 'react';
import './App.css';
import FiltersSection from './components/filters/FiltersSection';
import ResultsSection from './components/results/ResultsSection';

function App() {
  return (
    <div className="App">
      <FiltersSection />
      <ResultsSection />
    </div>
  );
}

export default App;