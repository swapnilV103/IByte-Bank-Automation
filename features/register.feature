Feature: User Registration and Login

  Scenario: Successfully register a new user and log in
    Given the user is on the Parabank home page
    When the user registers a new account with valid details
    And the user logs in using the newly created credentials
    Then the account overview page should be displayed
    And the account balance should be printed