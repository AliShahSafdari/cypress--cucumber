Feature: Invoice search

    Scenario: Invoice search with cucumber testing keyword
        Given I visit Invoice 
        When I search for "Ali Sirat"
        Then I should see the invoice for "Ali Sirat"

