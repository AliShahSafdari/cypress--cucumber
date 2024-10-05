Feature: Invoice Operations
  As a user
  I want to add and edit invoices
  So that I can manage my invoices effectively

  Scenario: Add a new invoice and cancel
    Given I am on the invoice list page
    When I click on the "Create Invoice" button
    Then I should see the add invoice page
    When I click on the "Cancel" button
    Then I should be back on the invoice list page

  Scenario: Edit an existing invoice
    Given I am on the invoice list page
    When I click on the "Edit" button for "Shah"
    