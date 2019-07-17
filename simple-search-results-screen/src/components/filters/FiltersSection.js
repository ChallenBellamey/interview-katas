import React, {Component} from 'react';
import FiltersHeader from './FiltersHeader';
import FiltersStarRating from './FiltersStarRating';
import FiltersFacilities from './FiltersFacilities';
import { getFacilitiesCount } from '../../requests/get.js';

class FiltersSection extends Component {
    state = {
        facilitiesCount: {},
        selectedFilters: {
            starRatings: [],
            facilities: []
        }
    }

    render () {
        const { facilitiesCount } = this.state;
        return <div className={"filtersSection"} data-cy={"filtersSection"}>
            <FiltersHeader />
            <FiltersStarRating />
            <FiltersFacilities facilitiesCount={facilitiesCount} />
        </div>
    }

    componentDidMount () {
        this.updateFacilitiesCount();
    }

    updateFacilitiesCount () {
        getFacilitiesCount()
            .then((facilitiesCount) => {
                this.setState({
                    facilitiesCount
                })
            })
    }
}

export default FiltersSection;