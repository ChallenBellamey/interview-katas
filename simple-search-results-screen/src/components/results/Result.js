import React from 'react';
import FiltersFacilities from '../filters/FiltersFacilities';

function Result ({result, key}) {
    return <div className="resultBox" data-cy={`result${key}`} key={key}>
        <span data-cy="resultName">{result.name}</span> <br/>
        <span data-cy="resultStarRating">Star rating: {result.starRating}</span> <br/>
        <span data-cy="resultFacility" key={key}>Facilities: {result.facilities.join(', ')}</span>
    </div>
}

export default Result;