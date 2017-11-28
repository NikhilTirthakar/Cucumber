package CucumberPackage.Cucumber;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;
//import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Cucumber {

	WebDriver driver;

	@Given("^I have an Application$")
	public void i_have_an_Application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		System.setProperty("webdriver.chrome.driver", "Resources/chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--start-maximized");
		driver = new ChromeDriver(options);
		driver.get("http://opensource.demo.orangehrmlive.com/");

	}

	@When("^I have given my credentials (\\w+) and (\\w+)$")
	/*
	 * @When("^I have given my credentials (.*) and (.*)$")
	 * 
	 * @When("^I have given my credentials (\\s+) and (\\s+)$")
	 *  
	 * @When("^I have given my credentials (\\d+) and (\\d+)$")
	 */
	public void i_have_given_my_credentials(String x, String y) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("txtUsername")).sendKeys(x);
		driver.findElement(By.id("txtPassword")).sendKeys(y);

	}

	@Then("^I should get logged in by clicking on the Login button$")
	public void i_should_get_logged_in_by_clicking_on_the_Login_button() throws Throwable {
		driver.findElement(By.id("btnLogin")).click();
		Assert.assertEquals(driver.getCurrentUrl(), "http://opensource.demo.orangehrmlive.com/index.php/dashboard");

		driver.close();

	}

}
