

Feature:As a Non register user I should not able to refer a product to a friend
  @nonRegisteredReferFriend
Scenario:I should NOT able to refer a product to a friend If I am not registered
Given I am on NopeCommerce Homepage
When I click on one product
And I click on email friend
And I enter all details for refer a product
And I click on send  Email Button
Then I should see error message <Only registered customers can use email a friend feature>