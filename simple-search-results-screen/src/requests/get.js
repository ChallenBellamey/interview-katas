import mockData from '../data/mockData.js';

export const getFacilitiesCount = async () => {
    const facilitiesCount = mockData.reduce((acc, hotel) => {
        hotel.facilities.forEach(nextFacility => {
            if (Object.keys(acc).includes(nextFacility)) {
                acc[nextFacility]++;
            } else {
                acc[nextFacility] = 1;
            };
        });
        return acc;
    }, {});
    return facilitiesCount;
};

export const getResults = async (filters) => {
    let results;
    if (filters) {
        const { starRatings, facilities } = filters;
        const filteredRatings = Object.keys(starRatings).reduce((acc, rating) => {
            if (starRatings[rating]) {
                acc.push(parseInt(rating));
            };
            return acc;
        }, []);
        const filteredFacilities = Object.keys(facilities).reduce((acc, facility) => {
            if (facilities[facility]) {
                acc.push(facility);
            };
            return acc;
        }, []);
        results = mockData.reduce((acc, hotel) => {
            let match = true;
            if (filteredRatings.length > 0) {
                if (!filteredRatings.includes(hotel.starRating)) {
                    match = false;
                };
            };
            if (filteredFacilities.length > 0) {
                const breakException = {};
                try {filteredFacilities.forEach(facility => {
                    if (!hotel.facilities.includes(facility)) {
                        throw breakException;
                    };
                })}
                catch (breakException) {
                    match = false;
                }
            };
            if (match) {
                acc.push(hotel);
            };
            return acc;
        }, []);
    } else {
        results = mockData;
    };
    return results;
}