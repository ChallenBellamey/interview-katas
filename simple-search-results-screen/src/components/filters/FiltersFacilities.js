import React from 'react';

function FiltersFacilities ({facilitiesCount}) {
    return <div data-cy={"filtersFacilities"}>
        <span>Facilities</span>
        {Object.keys(facilitiesCount).map((facility, i) => {
            return <div key={i}>
                <span>{facility} ({facilitiesCount[facility]})</span>
                <input type="checkbox" ></input>
            </div>
        })}
    </div>
}

export default FiltersFacilities;