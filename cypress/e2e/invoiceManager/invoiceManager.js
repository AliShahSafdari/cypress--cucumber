import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I visit Invoice", () =>{
    cy.visit('https://invoice-manager-delta.vercel.app/');
})


When('I search for {string}', (customerName) => {
    cy.get('input[placeholder="Search"]').type(customerName);
});

Then('I should see the invoice for {string}', (customerName) => {
    cy.contains('td', customerName).should('be.visible');
});

// When('I search for {string}', (customerName) => {
//     cy.get('input[placeholder="Search"]').type(customerName);
// });

// Then('I should see the invoice for {string}', (customerName) => {
//     cy.contains('td', customerName).should('be.visible');
// });

// When('I delete the invoice for {string}', (customerName) => {
//     cy.contains('td', customerName)
//         .parent('tr')
//         .within(() => {
//             cy.get('button[aria-label="Delete"]').click(); // Adjust the selector if necessary
//         });
//     cy.get('button').contains('Delete').click(); // Confirm the deletion in the modal
// });

// Then('I should not see the invoice for {string}', (customerName) => {
//     cy.contains('td', customerName).should('not.exist');
// });

// Then('I should see a success message', () => {
//     cy.contains('Invoice deleted successfully').should('be.visible');
// });
