
Feature:As a register userI should able to refer a product to a friend

  @registerUserReferProduct
  Scenario:I should able to refer a product to a friend
    Given I add login details
    And I am on product page
    When I click on any product
    And I click on email a friend
    And I enter all details except own email
    And I click on send email
    Then I should see <Your message has been sent>
