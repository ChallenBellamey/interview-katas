import React, { Component } from 'react';
import './App.css';
import FiltersSection from './components/filters/FiltersSection';
import ResultsSection from './components/results/ResultsSection';

class App extends Component {
  render = () => (
    <div className="App">
      <FiltersSection updateResults={this.updateResults} />
      <ResultsSection onMounted={callbacks => this.addCallbacks(callbacks)}/>
    </div>
  );

  addCallbacks = (callbacks) => {
    this.callbacks = {...this.callbacks, ...callbacks};
  }

  updateResults = (filters) => {
    this.callbacks.updateResults(filters);
  }
}

export default App;