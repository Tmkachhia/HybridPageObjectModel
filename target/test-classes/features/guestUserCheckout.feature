@guestUserCheckout

Feature:As a guest user they should be able to checkout successfully
  Scenario:Guest user should able to checkout successfully.

    Given guest user is on the Nopcommerce homepage
    When guest user click on  digitaldownload
    And guest user click on product
    And guest user click on add to cart and shopping cart button
    And guest user click on terms and condition and click on checkout
    And guest user click on check out as guest
    And guest user fill personal details and click confirm
     Then guest user can buy product successfully and see message
