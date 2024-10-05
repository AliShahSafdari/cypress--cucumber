import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the invoice list page', () => {
    cy.visit('https://invoice-manager-delta.vercel.app/'); 
});

When('I click on the {string} button', (buttonText) => {
    cy.contains('button', buttonText).click();
});

Then('I should see the add invoice page', () => {
    cy.contains('h2', 'Create Invoice').should('be.visible'); 
});

When('I click on the {string} button', (buttonText) => {
    cy.contains('button', buttonText).click();
});

Then('I should be back on the invoice list page', () => {
    cy.contains('h3', 'Invoice New').should('be.visible');
});

// When('I click on the "Edit" button for {string}', (customerName) => {
//     cy.contains('td', customerName)
//         .parent('tr')
//         .within(() => {
//             cy.get('a[href*="id"]').click(); 
//         });
// });

When('I click on the "Edit" button for {string}', (customerName) => {
    cy.contains('td', customerName)
        .parent('tr')
        .within(() => {
            cy.get('a[href*="id"]').should('be.visible').click({ force: true }); // Adjust the selector if necessary
        });
});
