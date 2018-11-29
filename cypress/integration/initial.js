// Create our test group
describe('Test form validation', () => {

    // We tell Cypress to visit this website for each test
    beforeEach(() => {
        cy.visit('https://75a4489877d14f64bc427ec1b0045698.codepen.website/');
    });
    
    // Test one: We want to make sure that if someone doesn't select a value 
    it('Select menu should always have a value', () => {

        // Grab the error message element for later
        const errorMessageElem = cy.get('.error-message');

        // Grab text inputs and type values into them
        cy.get('#name').type('Andy Bell');
        cy.get('#email').type('test@test.com');
        
        // Grab the form 
        cy.get('form')
            .then(formElement => {
                // Inside the promise we tell the form to attempt to submit
                formElement.submit();

                // We know it didn't submit because the select was empty and this should now pass
                expect(errorMessageElem).not.to.be.empty;
            });
    });
});
