import React from 'react';
import Result from './Result';

function ResultsList ({results}) {
    return <div className="subcomponent" data-cy={"resultsList"}>
        {results.map((result, i) => {
            return <Result key={i} result={result} />
        })}
    </div>
}

export default ResultsList;