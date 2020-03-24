@changeCurrency
Feature:As a user I should able to change currency
  so that I can use a different currency
  Scenario:I should able to change currency successfully

    Given I am on the NopeCommerce website homepage
    When I change currency to Euro
    Then I can see all the prices have change to Euro
