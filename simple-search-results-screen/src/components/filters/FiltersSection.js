import React, {Component} from 'react';
import FiltersHeader from './FiltersHeader';
import FiltersStarRating from './FiltersStarRating';
import FiltersFacilities from './FiltersFacilities';

class FiltersSection extends Component {
    render () {
        return <div data-cy={"filtersSection"}>
            <FiltersHeader />
            <FiltersStarRating />
            <FiltersFacilities />
        </div>
    }
}

export default FiltersSection;