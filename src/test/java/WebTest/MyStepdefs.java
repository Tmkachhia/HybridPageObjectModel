package WebTest;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MyStepdefs {

    // these are objects created of classes to call reusable methods
    HomePage homePage = new HomePage();
    RegisterPage registerPage = new RegisterPage();
    RegistrationResultPage registrationResultPage = new RegistrationResultPage();
    JeweleryPage jeweleryPage = new JeweleryPage();
    JeweleryComparisionPage jeweleryComparisionPage = new JeweleryComparisionPage();
    LoginPage loginPage = new LoginPage();
    ComputerPage computerPage = new ComputerPage();
    DesktopPage desktopPage = new DesktopPage();
    ReferProduct referProduct = new ReferProduct();
    EmailAFriend emailAFriend = new EmailAFriend();
    ElectronicsPage electronicsPage = new ElectronicsPage();
    CameraPhotoPage cameraPhotoPage = new CameraPhotoPage();
    DigitalDownload digitalDownload = new DigitalDownload();
    IfYouWaitProduct ifYouWaitProduct = new IfYouWaitProduct();
    CartPage cartPage = new CartPage();
    CheckOutAsGuest checkOutAsGuest = new CheckOutAsGuest();
    OnePageCheckout onePageCheckOut = new OnePageCheckout();
    CheckOutCompleted checkOutCompleted = new CheckOutCompleted();
    AboutNopCommerce aboutNopCommerce = new AboutNopCommerce();

    @Given("User is on register page")
    public void user_is_on_register_page()
    {
        //click on Register button
        homePage.clickOnRegisterButton();

    }

    @When("User enter all registration details")
    public void user_enter_all_registration_details()
    {
        //verify user is on Register page
        registerPage.verifyUserIsOnRegisterPage();

        //user enter all Registration details
        registerPage.userEnterRegistrationDetails();

    }

    @And("User click on Register button")
    public void user_click_on_Register_button() {
        registerPage.userClickOnRegisterButton();
    }

    @Then("User should able to register successfully")
    public void user_should_able_to_register_successfully()
    {
        //user able to see success message
        registrationResultPage.verifyUserSeeRegistrationSuccessMessage();
    }

    @Given("I am on the NopeCommerce  homepage")
    public void iAmOnTheNopeCommerceHomepage()
    {
     homePage.clickOnJewelery();
    }

    @When("I click on two product for add to compare list")
    public void iClickOnTwoProductForAddToCompareList()
    {
     jeweleryPage.verifyUserOnJeweleryPage();
     jeweleryPage.chooseProductToCompare();

    }

    @Then("I should able to compare two product and see <compare products> message")
    public void iShouldAbleToCompareTwoProductAndSeeCompareProductsMessage()
    {
        jeweleryComparisionPage.verifyUserIsOnJeweleryComparisionPage();
    }

    @Given("I add login details")
    public void iAddLoginDetails()
    {
        homePage.clickOnLogin();
        loginPage.userEnterLoginDetails();
        homePage.clickOnComputer();
    }

    @And("I am on product page")
    public void iAmOnProductPage()
    {
        computerPage.clickOnDesktop();
    }

    @When("I click on any product")
    public void iClickOnAnyProduct() {
        desktopPage.verifyUserIsOnDesktopPage();
        desktopPage.userSelectItemToReferFriend();
    }

    @And("I click on email a friend")
    public void iClickOnEmailAFriend() {
        referProduct.emailProduct();
    }

    @And("I enter all details except own email")
    public void iEnterAllDetailsExceptOwnEmail() {
        emailAFriend.enterEmailAddressOfFriend();
    }

    @And("I click on send email")
    public void iClickOnSendEmail() {
        emailAFriend.sendEmailToFriend();
    }

    @Then("I should see <Your message has been sent>")
    public void iShouldSeeYourMessageHasBeenSent() {
        emailAFriend.verifyUserSeeEmailSentMessage();
    }

    @Given("I am on NopeCommerce Homepage")
    public void iAmOnNopeCommerceHomepage()
    {
        homePage.clickOnComputer();
    }

    @When("I click on one product")
    public void iClickOnOneProduct() {

        computerPage.clickOnDesktop();
        desktopPage.userSelectItemToReferFriend();
    }

    @And("I click on email friend")
    public void iClickOnEmailFriend()
    {
        //user enter friend's email address
        referProduct.emailProduct();

    }

    @And("I enter all details for refer a product")
    public void iEnterAllDetailsForReferAProduct() {
        emailAFriend.enterEmailAddressOfFriend();
    }

    @And("I click on send  Email Button")
    public void iClickOnSendEmailButton() {
        emailAFriend.sendEmailToFriend();
    }

    @Then("I should see error message <Only registered customers can use email a friend feature>")
    public void iShouldSeeErrorMessageOnlyRegisteredCustomersCanUseEmailAFriendFeature()
    {
        //user can see message
        emailAFriend.verifyNotRegisterUserSeeErrorMessage();
    }

    @Given("user is on the NopeCommerce  homepage")
    public void userIsOnTheNopeCommerceHomepage() {
        homePage.clickOnElectronics();
    }

    @When("I click on any category")
    public void iClickOnAnyCategory() {
        //click on CameraAndPhotos category
        electronicsPage.clickOnCameraAndPhotos();
        //verify user is navigated to Camera-photos category
        cameraPhotoPage.verifyUserOnCameraAndPhotosPage();
    }

    @And("I select on high to low")
    public void iSelectOnHighToLow() {
        //selecting price from high to low from drop down
        cameraPhotoPage.useSelectFromPositionPriceHighToLow();
    }

    @Then("I should see price organised high to low")
    public void iShouldSeePriceOrganisedHighToLow() {
        cameraPhotoPage.userVerifyPriceHighToLowArranged();
    }

    @Given("guest user is on the Nopcommerce homepage")
    public void guestUserIsOnTheNopcommerceHomepage()
    {
        //verify user is on home page
        homePage.verifyUserIsOnHomePage();
        homePage.clickOnDigitalDownLoad();
    }

    @When("guest user click on  digitaldownload")
    public void guestUserClickOnDigitaldownload() {
    }

    @And("guest user click on product")
    public void guestUserClickOnProduct()
    {
        //click on digital download
        digitalDownload.verifyUserIsOnDigitalDownloadPage();
        digitalDownload.clickOnIfYouWaitProduct();
    }

    @And("guest user click on add to cart and shopping cart button")
    public void guestUserClickOnAddToCartAndShoppingCartButton() {
        //click on add to cart button
        ifYouWaitProduct.addToCartButtonAndShoppingCart();
    }

    @And("guest user click on terms and condition and click on checkout")
    public void guestUserClickOnTermsAndConditionAndClickOnCheckout() {

        //verify user is on cart page,tick box and click on checkout
        cartPage.verifyUserIsOnCartPage();
        cartPage.clickOnTermsAndCondition();
    }

    @And("guest user click on check out as guest")
    public void guestUserClickOnCheckOutAsGuest() {

        //verify user is on that page
        cartPage.clickOnCheckOut();
        //user verify that he is navigated to checkout as guest page  and click on check out as guest button
        checkOutAsGuest.verifyUserShouldOnCheckoutAsAGuestPage();
        checkOutAsGuest.clickOCheckoutAsGuestButton();
    }

    @And("guest user fill personal details and click confirm")
    public void guestUserFillPersonalDetailsAndClickConfirm() {

        //Guest user enter all details and confirm and continue
        onePageCheckOut.guestEnterDetails();
        onePageCheckOut.clickOnContinue();
        onePageCheckOut.clickOnConfirm();
    }

    @Then("guest user can buy product successfully and see message")
    public void guestUserCanBuyProductSuccessfullyAndSeeMessage() {

        //guest user able to checkout successfully
        checkOutCompleted.userIsOnCheckoutCompletedPage();
    }

    @Given("user is on the Nopcommerce homepage")
    public void userIsOnTheNopcommerceHomepage() {

       homePage.verifyUserIsOnHomePage();

    }

    @When("user click on Details")
    public void userClickOnDetails() {

        homePage.clickOnDetailsButton();
        //verify user on About nop commerce page
        aboutNopCommerce.verifyUserIsOnAboutNopCommercePage();
    }

    @And("user add comments")
    public void userAddComments() {

        //user add comments
        aboutNopCommerce.addComments();
    }

    @Then("comment should be added and message display")
    public void commentShouldBeAddedAndMessageDisplay() {
        aboutNopCommerce.verifyCommentsAdded();
    }

    @Given("I am on the NopeCommerce website homepage")
    public void iAmOnTheNopeCommerceWebsiteHomepage() {
        //verifying default home page currency
        homePage.verifyingCurrencySymbolPresent();
    }

    @When("I change currency to Euro")
    public void iChangeCurrencyToEuro() {

        //change currency to another one
        homePage.selectCurrencyFromDropDown();

    }

    @Then("I can see all the prices have change to Euro")
    public void iCanSeeAllThePricesHaveChangeToEuro() {

        //verifying default home page currency
        homePage.verifyingCurrencySymbolPresent();
    }

    @Given("I am on the NopeCommerce page")
    public void iAmOnTheNopeCommercePage() {
        homePage.verifyUserIsOnHomePage();
    }

    @Then("I am able to verify add to cart button is present or not")
    public void iAmAbleToVerifyAddToCartButtonIsPresentOrNot() {
        homePage.verifyAddToCartButtonPresent();
    }
}
