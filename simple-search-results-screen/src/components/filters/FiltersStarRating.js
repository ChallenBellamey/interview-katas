import React from 'react';

function FiltersStarRating ({toggleFilter, filterActive}) {
    return <div data-cy={"filtersStarRating"}>
        <span>Star Rating</span>
        <button data-cy={`filterRating${1}`} className={`filterActive-${filterActive[1]}`} onClick={event => toggleFilter('starRatings', 1)}>1</button>
        <button data-cy={`filterRating${2}`} className={`filterActive-${filterActive[2]}`} onClick={event => toggleFilter('starRatings', 2)}>2</button>
        <button data-cy={`filterRating${3}`} className={`filterActive-${filterActive[3]}`} onClick={event => toggleFilter('starRatings', 3)}>3</button>
        <button data-cy={`filterRating${4}`} className={`filterActive-${filterActive[4]}`} onClick={event => toggleFilter('starRatings', 4)}>4</button>
        <button data-cy={`filterRating${5}`} className={`filterActive-${filterActive[5]}`} onClick={event => toggleFilter('starRatings', 5)}>5</button>
    </div>
}

export default FiltersStarRating;