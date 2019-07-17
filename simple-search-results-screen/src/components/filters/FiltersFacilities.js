import React from 'react';

function FiltersFacilities ({facilitiesCount, toggleFilter}) {
    return <div data-cy={"filtersFacilities"}>
        <span>Facilities</span>
        {Object.keys(facilitiesCount).map((facility, i) => {
            return <div key={i}>
                <span>{`${facility} (${facilitiesCount[facility]})`}</span>
                <input type="checkbox" onChange={event => toggleFilter('facilities', facility)} />
            </div>
        })}
    </div>
}

export default FiltersFacilities;