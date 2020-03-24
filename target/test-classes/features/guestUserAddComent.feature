
@addNewComment
Feature:guest user  can add new comment in nopcommerce
  Scenario:Guest user should able to add a new comment in nopcommerce successfully

    Given user is on the Nopcommerce homepage
    When user click on Details
    And user add comments
    Then comment should be added and message display