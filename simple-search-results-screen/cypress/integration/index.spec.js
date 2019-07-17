/*
User Stories
- Upon opening the app...
    ...user will see Filters on the left side of the page with the option to filter by star rating and facilities (initially no filters selected).
    ...user will see a list of results on the right side of the page with the option to sort by hotel name or star rating (initially sorting by star rating) and the option to browse multiple pages (if necessary).
- Upon using the filters...
    ...user can toggle which star ratings show up in the results by clicking.
    ...user can toggle which facilities show up in the results by clicking.
- Upon using the sort by...
    ...user can choose by which property the results are ordered by clicking.
- Upon using the results list...
    ...user can see results, including hotel name and star rating, and scroll through them.
- Upon using the page interface...
    ...user can see which page they are currently on and move to a different page by clicking.
*/

describe('Simple Search Results Screen', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Filters section displays correctly', () => {
        cy.get('[data-cy="filtersSection"]').should('be.visible');
        cy.get('[data-cy="filtersHeader"]').should('be.visible');
        cy.get('[data-cy="filtersStarRating"]').should('be.visible');
        cy.get('[data-cy="filtersFacilities"]').should('be.visible');
    })

    it('Results section displays correctly', () => {
        cy.get('[data-cy="resultsSection"]').should('be.visible');
        cy.get('[data-cy="resultsSortBy"]').should('be.visible');
        cy.get('[data-cy="resultsList"]').should('be.visible');
        cy.get('[data-cy="resultsPageSelect"]').should('be.visible');
    })

    it('Results list displays results', () => {
        cy.get('[data-cy="resultName"]').should('be.visible');
        cy.get('[data-cy="resultStarRating"]').should('be.visible');
        cy.get('[data-cy="resultFacility"]').should('be.visible');
    })

    it('Results list updates upon selecting rating filters', () => {
        cy.get('[data-cy="filterRating1"]').click()
        cy.get('[data-cy="result0"]').should('not.be.visible');

        cy.get('[data-cy="filterRating3"]').click()
        cy.get('[data-cy="result0"]').should('be.visible');
        cy.get('[data-cy="result1"]').should('be.visible');
        cy.get('[data-cy="result2"]').should('not.be.visible');
    })

    it('Results list updates upon selecting rating filters', () => {
        cy.get('[data-cy="filterFacility0"]').check()
        cy.get('[data-cy="result0"]').should('be.visible');
        cy.get('[data-cy="result1"]').should('be.visible');
        cy.get('[data-cy="result2"]').should('not.be.visible');

        cy.get('[data-cy="filterFacility1"]').check()
        cy.get('[data-cy="result0"]').should('be.visible');
        cy.get('[data-cy="result1"]').should('not.be.visible');

        cy.get('[data-cy="filterFacility2"]').check()
        cy.get('[data-cy="result0"]').should('not.be.visible');
    })
  })