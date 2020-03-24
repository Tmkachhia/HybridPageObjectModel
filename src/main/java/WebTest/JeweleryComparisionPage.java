package WebTest;

public class JeweleryComparisionPage extends Utils
{
    //method to confirm user navigated to comparision page
    public void verifyUserIsOnJeweleryComparisionPage()
    {
        assertURL("compareproducts");

    }
}
