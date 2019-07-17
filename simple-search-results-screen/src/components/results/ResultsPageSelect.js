import React from 'react';

function ResultsPageSelect () {
    return <div className="subcomponent" data-cy={"resultsPageSelect"}>
        <button>{"<"}</button>
        <span>page</span>
        <button>{">"}</button>
    </div>
}

export default ResultsPageSelect;