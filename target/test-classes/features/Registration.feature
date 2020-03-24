@register @regression
Feature: User should able to register successfully
  so that user can use all facility from website
  Scenario: User should able to register successfully
    Given User is on register page
    When  User enter all registration details
    And   User click on Register button
    Then  User should able to register successfully
