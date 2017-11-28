@smoke
Feature: Title of your feature  
	I want to use this template for my feature file

@LoginCase1
Scenario Outline: Login Scenario
Given I have an Application
When I have given my credentials <Username> and <Password>
Then I should get logged in by clicking on the Login button 


Examples:

|Username|Password|
|admin|admin|
|nikhil|nikhil|

@LoginCase2
Scenario: Login Scenario
Given opening Application
When I have given only Username
Then Click on the Login button


@LoginCase3 
Scenario: Login Scenario
Given Opening Application
When I have given only Password
Then Click on the Login_button