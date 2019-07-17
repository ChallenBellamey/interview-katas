import React from 'react';

function FiltersStarRating ({toggleFilter, filterActive}) {
    return <div data-cy={"filtersStarRating"}>
        <span>Star Rating</span>
        <button className={`filterActive-${filterActive[1]}`} onClick={event => toggleFilter('starRatings', 1)}>1</button>
        <button className={`filterActive-${filterActive[2]}`} onClick={event => toggleFilter('starRatings', 2)}>2</button>
        <button className={`filterActive-${filterActive[3]}`} onClick={event => toggleFilter('starRatings', 3)}>3</button>
        <button className={`filterActive-${filterActive[4]}`} onClick={event => toggleFilter('starRatings', 4)}>4</button>
        <button className={`filterActive-${filterActive[5]}`} onClick={event => toggleFilter('starRatings', 5)}>5</button>
    </div>
}

export default FiltersStarRating;