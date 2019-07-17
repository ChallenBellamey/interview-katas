import React from 'react';

function FiltersStarRating ({toggleFilter}) {
    return <div data-cy={"filtersStarRating"}>
        <span>Star Rating</span>
        <button onClick={event => toggleFilter('starRatings', 1)}>1</button>
        <button onClick={event => toggleFilter('starRatings', 2)}>2</button>
        <button onClick={event => toggleFilter('starRatings', 3)}>3</button>
        <button onClick={event => toggleFilter('starRatings', 4)}>4</button>
        <button onClick={event => toggleFilter('starRatings', 5)}>5</button>
    </div>
}

export default FiltersStarRating;