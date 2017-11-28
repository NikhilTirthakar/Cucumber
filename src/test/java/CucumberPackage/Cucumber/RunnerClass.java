package CucumberPackage.Cucumber;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions
(
	features="CucumberFeature",
	glue="CucumberPackage.Cucumber",
	format={"pretty","html:target/HTMLCucumberReport","json:target/Cucumber.json"},
	tags={"@smoke"}
			
	
)
public class RunnerClass extends AbstractTestNGCucumberTests 
{
  @Test
  public void f()
  {
	  
  }
}
	
