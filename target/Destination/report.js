$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/features/CompareProduct.feature");
formatter.feature({
  "name": "As a user I should able to compare products",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@compare"
    }
  ]
});
formatter.scenario({
  "name": "I should able to compare two different product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@compare"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the NopeCommerce  homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iAmOnTheNopeCommerceHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on two product for add to compare list",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iClickOnTwoProductForAddToCompareList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should able to compare two product and see \u003ccompare products\u003e message",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iShouldAbleToCompareTwoProductAndSeeCompareProductsMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/features/NoNRegisteredUserCanNotRefer.feature");
formatter.feature({
  "name": "As a Non register user I should not able to refer a product to a friend",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I should NOT able to refer a product to a friend If I am not registered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@nonRegisteredReferFriend"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on NopeCommerce Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iAmOnNopeCommerceHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on one product",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iClickOnOneProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on email friend",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iClickOnEmailFriend()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter all details for refer a product",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iEnterAllDetailsForReferAProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on send  Email Button",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iClickOnSendEmailButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see error message \u003cOnly registered customers can use email a friend feature\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iShouldSeeErrorMessageOnlyRegisteredCustomersCanUseEmailAFriendFeature()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/features/RegisterdUserReferFriend.feature");
formatter.feature({
  "name": "As a register userI should able to refer a product to a friend",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I should able to refer a product to a friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@registerUserReferProduct"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I add login details",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iAddLoginDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on product page",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iAmOnProductPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on any product",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iClickOnAnyProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on email a friend",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iClickOnEmailAFriend()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter all details except own email",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iEnterAllDetailsExceptOwnEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on send email",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iClickOnSendEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \u003cYour message has been sent\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iShouldSeeYourMessageHasBeenSent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/features/Registration.feature");
formatter.feature({
  "name": "User should able to register successfully",
  "description": "  so that user can use all facility from website",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "User should able to register successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on register page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.user_is_on_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter all registration details",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest.MyStepdefs.user_enter_all_registration_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Register button",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.user_click_on_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.user_should_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/features/cartButtonPresent.feature");
formatter.feature({
  "name": "As a user I can see add to cart button on all feature product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addToCartButton"
    }
  ]
});
formatter.scenario({
  "name": "I should able to see add cart button on all feature product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addToCartButton"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the NopeCommerce page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iAmOnTheNopeCommercePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to verify add to cart button is present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iAmAbleToVerifyAddToCartButtonIsPresentOrNot()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/features/changeCurreny.feature");
formatter.feature({
  "name": "As a user I should able to change currency",
  "description": "  so that I can use a different currency",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@changeCurrency"
    }
  ]
});
formatter.scenario({
  "name": "I should able to change currency successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@changeCurrency"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the NopeCommerce website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iAmOnTheNopeCommerceWebsiteHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I change currency to Euro",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iChangeCurrencyToEuro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see all the prices have change to Euro",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iCanSeeAllThePricesHaveChangeToEuro()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/features/guestUserAddComent.feature");
formatter.feature({
  "name": "guest user  can add new comment in nopcommerce",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addNewComment"
    }
  ]
});
formatter.scenario({
  "name": "Guest user should able to add a new comment in nopcommerce successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addNewComment"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the Nopcommerce homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userIsOnTheNopcommerceHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Details",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userClickOnDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add comments",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userAddComments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "comment should be added and message display",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.commentShouldBeAddedAndMessageDisplay()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Result not match please check expected [News comment is successfully added.DELETE THIS] but found [News comment is successfully added.]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat WebTest.AboutNopCommerce.verifyCommentsAdded(AboutNopCommerce.java:33)\r\n\tat WebTest.MyStepdefs.commentShouldBeAddedAndMessageDisplay(MyStepdefs.java:268)\r\n\tat ✽.comment should be added and message display(file:///C:/Users/Kishan/HybridPageObjectModel/./src/test/Resources/features/guestUserAddComent.feature:9)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/features/guestUserCheckout.feature");
formatter.feature({
  "name": "As a guest user they should be able to checkout successfully",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@guestUserCheckout"
    }
  ]
});
formatter.scenario({
  "name": "Guest user should able to checkout successfully.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@guestUserCheckout"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "guest user is on the Nopcommerce homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.guestUserIsOnTheNopcommerceHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guest user click on  digitaldownload",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest.MyStepdefs.guestUserClickOnDigitaldownload()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guest user click on product",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.guestUserClickOnProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guest user click on add to cart and shopping cart button",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.guestUserClickOnAddToCartAndShoppingCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guest user click on terms and condition and click on checkout",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.guestUserClickOnTermsAndConditionAndClickOnCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guest user click on check out as guest",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.guestUserClickOnCheckOutAsGuest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guest user fill personal details and click confirm",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.guestUserFillPersonalDetailsAndClickConfirm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guest user can buy product successfully and see message",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.guestUserCanBuyProductSuccessfullyAndSeeMessage()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \" Test fail please check expected not match actual \" expected [Your order has been successfully processed!PLEASE DELETE THIS] but found [Your order has been successfully processed!]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat WebTest.CheckOutCompleted.userIsOnCheckoutCompletedPage(CheckOutCompleted.java:13)\r\n\tat WebTest.MyStepdefs.guestUserCanBuyProductSuccessfullyAndSeeMessage(MyStepdefs.java:241)\r\n\tat ✽.guest user can buy product successfully and see message(file:///C:/Users/Kishan/HybridPageObjectModel/./src/test/Resources/features/guestUserCheckout.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/features/sortProductHighToLow.feature");
formatter.feature({
  "name": "As a user, I should be able to sort product high to low by price,",
  "description": "  so that I can use sort product facility.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sortHighLow"
    }
  ]
});
formatter.scenario({
  "name": "I should able to sort product high to low by price.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sortHighLow"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the NopeCommerce  homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userIsOnTheNopeCommerceHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on any category",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iClickOnAnyCategory()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select on high to low",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iSelectOnHighToLow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see price organised high to low",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.iShouldSeePriceOrganisedHighToLow()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});