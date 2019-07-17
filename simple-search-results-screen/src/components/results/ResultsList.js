import React from 'react';

function ResultsList ({results}) {
    return <div data-cy={"resultsList"}>
        {results.map((result, i) => {
            return <div key={i}>
                <span>{result.name}</span>
                <span>{result.starRating}</span>
                {result.facilities.map((facility, i) => {
                    return <span key={i}>{facility}</span>
                })}
            </div>
        })}
    </div>
}

export default ResultsList;