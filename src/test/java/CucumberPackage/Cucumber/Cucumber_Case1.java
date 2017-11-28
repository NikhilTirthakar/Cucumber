package CucumberPackage.Cucumber;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Cucumber_Case1 {
	
	WebDriver driver;
	
	@Given("^opening Application$")
	public void i_have_an_Application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		System.setProperty("webdriver.chrome.driver", "Resources/chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--start-maximized");
		driver = new ChromeDriver(options);
		driver.get("http://opensource.demo.orangehrmlive.com/");

	}
	@When("^I have given only Username$")
	public void i_have_given_only_Username() throws Throwable {
		 driver.findElement(By.id("txtUsername")).sendKeys("Admin");
	       //driver.findElement(By.id("txtPassword")).sendKeys("admin");
		   Thread.sleep(1000);
	       driver.findElement(By.id("btnLogin")).click();
	       //Thread.sleep(1000);
	      // driver.navigate().back();
	       driver.findElement(By.id("txtUsername")).clear();
	       driver.findElement(By.id("spanMessage")).clear();
	       
	       Thread.sleep(2000);
		
	    throw new PendingException();
	}

	@Then("^Click on the Login button$")
	public void click_on_the_Login_button() throws Throwable {
	   
		driver.findElement(By.id("btnLogin")).click();
		Assert.assertEquals(driver.getCurrentUrl(), "http://opensource.demo.orangehrmlive.com/index.php/dashboard");

	    throw new PendingException();
	}


}
