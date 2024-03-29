package WebTest;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;

import static com.sun.deploy.cache.Cache.copyFile;

public class Hooks extends Utils
{
    BrowserSelector browserSelector = new BrowserSelector();

    @Before
    public void openBrowser() {
        browserSelector.setUpBrowser();
    }

    @After

    public void closeBrowser(Scenario scenario)
    {
        if (scenario.isFailed())
        {
            String screenshotName = scenario.getName().replaceAll(".,:;?!", "") + timeStamp() + ".png";
            try {
                File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
                File destinationPath = new File(System.getProperty("user.dir") + "/target/Destination/ScreenShots/" + screenshotName);
                copyFile(sourcePath, destinationPath);
                scenario.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
                scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");


            } catch (IOException e)
            {
                e.printStackTrace();
            }

        }
        driver.quit();
    }


}
