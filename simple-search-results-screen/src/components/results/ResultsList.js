import React from 'react';

function ResultsList ({results}) {
    return <div className="subcomponent" data-cy={"resultsList"}>
        {results.map((result, i) => {
            return <div data-cy={`result${i}`} key={i}>
                <span data-cy="resultName">{result.name}</span>
                <span data-cy="resultStarRating">{result.starRating}</span>
                {result.facilities.map((facility, i) => {
                    return <span data-cy="resultFacility" key={i}>{facility}</span>
                })}
            </div>
        })}
    </div>
}

export default ResultsList;