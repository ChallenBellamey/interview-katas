import mockData from '../data/mockData.js';

function getFacilities () {
    const facilities = mockData.reduce((acc, hotel) => {
        hotel.facilities.forEach(nextFacility => {
            if (Object.keys(acc).includes(nextFacility)) {
                acc[nextFacility]++;
            } else {
                acc[nextFacility] = 1;
            };
        });
        return acc;
    }, {});
    return facilities;
};