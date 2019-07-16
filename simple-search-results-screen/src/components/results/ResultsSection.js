import React, {Component} from 'react';
import ResultsSortBy from './ResultsSortBy';
import ResultsList from './ResultsList';
import ResultsPageSelect from './ResultsPageSelect';

class ResultsSection extends Component {
    render () {
        return <div data-cy={"resultsSection"}>
            <ResultsSortBy />
            <ResultsList />
            <ResultsPageSelect />
        </div>
    }
}

export default ResultsSection;