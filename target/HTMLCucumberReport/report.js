$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Selenium.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login Scenario",
  "description": "",
  "id": "title-of-your-feature;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@LoginCase1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have an Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have given my credentials \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get logged in by clicking on the Login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 14,
      "id": "title-of-your-feature;login-scenario;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 15,
      "id": "title-of-your-feature;login-scenario;;2"
    },
    {
      "cells": [
        "nikhil",
        "nikhil"
      ],
      "line": 16,
      "id": "title-of-your-feature;login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Login Scenario",
  "description": "",
  "id": "title-of-your-feature;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@LoginCase1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have an Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have given my credentials admin and admin",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get logged in by clicking on the Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.i_have_an_Application()"
});
formatter.result({
  "duration": 12544470145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 28
    },
    {
      "val": "admin",
      "offset": 38
    }
  ],
  "location": "Cucumber.i_have_given_my_credentials(String,String)"
});
formatter.result({
  "duration": 391483327,
  "status": "passed"
});
formatter.match({
  "location": "Cucumber.i_should_get_logged_in_by_clicking_on_the_Login_button()"
});
formatter.result({
  "duration": 5698802231,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Scenario",
  "description": "",
  "id": "title-of-your-feature;login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@LoginCase1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have an Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have given my credentials nikhil and nikhil",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get logged in by clicking on the Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.i_have_an_Application()"
});
formatter.result({
  "duration": 9090914096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nikhil",
      "offset": 28
    },
    {
      "val": "nikhil",
      "offset": 39
    }
  ],
  "location": "Cucumber.i_have_given_my_credentials(String,String)"
});
formatter.result({
  "duration": 327740103,
  "status": "passed"
});
formatter.match({
  "location": "Cucumber.i_should_get_logged_in_by_clicking_on_the_Login_button()"
});
formatter.result({
  "duration": 1088945423,
  "error_message": "java.lang.AssertionError: expected [http://opensource.demo.orangehrmlive.com/index.php/dashboard] but found [http://opensource.demo.orangehrmlive.com/index.php/auth/validateCredentials]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat CucumberPackage.Cucumber.Cucumber.i_should_get_logged_in_by_clicking_on_the_Login_button(Cucumber.java:48)\r\n\tat ✽.Then I should get logged in by clicking on the Login button(Selenium.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Login Scenario",
  "description": "",
  "id": "title-of-your-feature;login-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@LoginCase2"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "opening Application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I have given only Username",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Click on the Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber_Case1.i_have_an_Application()"
});
formatter.result({
  "duration": 8786034221,
  "status": "passed"
});
formatter.match({
  "location": "Cucumber_Case1.i_have_given_only_Username()"
});
formatter.result({
  "duration": 1520218920,
  "error_message": "org.openqa.selenium.InvalidElementStateException: invalid element state: Element must be user-editable in order to clear it.\n  (Session info: chrome\u003d62.0.3202.89)\n  (Driver info: chromedriver\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8),platform\u003dWindows NT 6.3.9600 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027SHREEYA-MALHAR\u0027, ip: \u0027192.168.1.102\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8), userDataDir\u003dC:\\Users\\MALHAR~1\\AppData\\Local\\Temp\\scoped_dir5588_8770}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d62.0.3202.89, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d95c7a2f0e6146e6088bb10b5d0ab6d2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:118)\r\n\tat CucumberPackage.Cucumber.Cucumber_Case1.i_have_given_only_Username(Cucumber_Case1.java:38)\r\n\tat ✽.When I have given only Username(Selenium.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Cucumber_Case1.click_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Login Scenario",
  "description": "",
  "id": "title-of-your-feature;login-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@LoginCase3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Opening Application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I have given only Password",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Click on the Login_button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});