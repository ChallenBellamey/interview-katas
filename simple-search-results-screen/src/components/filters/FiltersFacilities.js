import React from 'react';

function FiltersFacilities ({facilitiesCount, toggleFilter}) {
    return <div className="subcomponent" data-cy={"filtersFacilities"}>
        <b><span>Facilities</span></b>
        {Object.keys(facilitiesCount).map((facility, i) => {
            return <div key={i}>
                <span>{`${facility} (${facilitiesCount[facility]})`}</span>
                <input data-cy={`filterFacility${i}`} type="checkbox" onChange={event => toggleFilter('facilities', facility)} />
            </div>
        })}
    </div>
}

export default FiltersFacilities;