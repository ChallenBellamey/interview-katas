import React, {Component} from 'react';
import FiltersHeader from './FiltersHeader';
import FiltersStarRating from './FiltersStarRating';
import FiltersFacilities from './FiltersFacilities';
import { getFacilities } from '../../requests/get.js';

class FiltersSection extends Component {
    state = {
        facilities: []
    }

    render () {
        const { facilities } = this.state;
        return <div className={"filtersSection"} data-cy={"filtersSection"}>
            <FiltersHeader />
            <FiltersStarRating />
            <FiltersFacilities />
        </div>
    }

    componentDidMount () {
        getFacilities()
            .then((facilities) => {
                this.setState({
                    facilities
                })
            })
    }
}

export default FiltersSection;