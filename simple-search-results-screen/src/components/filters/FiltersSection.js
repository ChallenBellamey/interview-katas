import React, {Component} from 'react';
import FiltersHeader from './FiltersHeader';
import FiltersStarRating from './FiltersStarRating';
import FiltersFacilities from './FiltersFacilities';
import { getFacilitiesCount } from '../../requests/get.js';

class FiltersSection extends Component {
    state = {
        facilitiesCount: {},
        selectedFilters: {
            starRatings: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false
            },
            facilities: {}
        }
    }

    render () {
        const { facilitiesCount } = this.state;
        return <div className={"filtersSection"} data-cy={"filtersSection"}>
            <FiltersHeader />
            <FiltersStarRating toggleFilter={this.toggleFilter} />
            <FiltersFacilities facilitiesCount={facilitiesCount} toggleFilter={this.toggleFilter} />
        </div>
    }

    componentDidMount = () => {
        this.updateFacilities();
    }

    updateFacilities = () => {
        getFacilitiesCount()
            .then((facilitiesCount) => {
                const starRatings = this.state.selectedFilters.starRatings;
                const facilities = {...this.state.selectedFilters.facilities};
                Object.keys(facilitiesCount).forEach(facility => {
                    if (!Object.keys(facilities).includes(facility)) {
                        facilities[facility] = false;
                    };
                });
                Object.keys(facilities).forEach(facility => {
                    if (!Object.keys(facilitiesCount).includes(facility)) {
                        delete facilities[facility];
                    };
                });
                this.setState({
                    facilitiesCount,
                    selectedFilters: {
                        starRatings,
                        facilities
                    }
                });
            })
    }

    toggleFilter = (type, content) => {
        this.setState(prevState => {
            return {
                selectedFilters: {
                    ...prevState.selectedFilters,
                    [type]: {
                        ...prevState.selectedFilters[type],
                        [content]: !prevState.selectedFilters[type][content]
                    }
                }
            };
        });
    }
}

export default FiltersSection;