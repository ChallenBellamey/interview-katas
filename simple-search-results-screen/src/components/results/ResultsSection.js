import React, {Component} from 'react';
import ResultsSortBy from './ResultsSortBy';
import ResultsList from './ResultsList';
import ResultsPageSelect from './ResultsPageSelect';
import { getResults } from '../../requests/get.js';

class ResultsSection extends Component {
    state = {
        results: []
    }

    componentDidMount = () => {
        this.updateResults();
        if (this.props.onMounted) {
            this.props.onMounted({
                updateResults: this.updateResults
            })
        }
    }

    render = () => {
        return <div className={"resultsSection"} data-cy={"resultsSection"}>
            <ResultsSortBy />
            <ResultsList />
            <ResultsPageSelect />
        </div>
    }

    updateResults = (filters) => {
        getResults(filters)
            .then((results) => {
                this.setState({
                    results
                });
            })
    }
}

export default ResultsSection;