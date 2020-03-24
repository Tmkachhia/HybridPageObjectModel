@compare
Feature: As a user I should able to compare products


  Scenario:I should able to compare two different product
    Given I am on the NopeCommerce  homepage
    When I click on two product for add to compare list
#    And I click on bar notification
    Then I should able to compare two product and see <compare products> message