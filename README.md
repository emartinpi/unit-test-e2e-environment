# How to set up an environment with unit testing tools (Mocha & Karma) and E2E testing tools (Nightwatch & Selenium)

This guide shows you the basics to create an environmnet where you can test your code with the following tools:


1. Global tools:

    - [Gulp](http://gulpjs.com/), a toolkit that help you automate painful tasks

2. Unit testing tools:

    - [Mocha](https://mochajs.org/), a test framework with sopport for BDD and TDD
    - [Chai](http://chaijs.com/) for assertion types than can be used with Mocha
    - [Karma](https://karma-runner.github.io/0.13/index.html), a test runner. A js command line tool to spawn a web server which loads your app source code and executes your test
    - [PhamtomJS](http://phantomjs.org/), a Webkit scriptable, headless browser used for automating web page interaction
    - [Istambul](https://github.com/gotwarlost/istanbul), a js code coverage tool that computes statement line, functions and branchs

3. E2E (End to End) testing tools:

    - [Nightwatch.js](http://nightwatchjs.org), a solution to write E2E tests in Node.js quickly and effortlessly that run against a Selenium server
    - [Selenium](http://www.seleniumhq.org) to automate browsers. It is composed of:
        - [Selenium Server](http://www.seleniumhq.org/download) needed in order to run Selenium WebDriver
        - [Selenium WebDriver](http://www.seleniumhq.org/projects/webdriver) for driving a browser natively as a user would using the Selenium Server

## Install gulp globally

    $ npm install -g gulp

## Install the rest of dependencies of package.json

    $ npm install

The command above  will install the next devDependencies of package.json file among the others:

- [karma-chrome-launcher](https://github.com/karma-runner/karma-chrome-launcher), a plugin launcher for Chrome browser
- [karma-phantomjs-launcher](https://github.com/karma-runner/karma-phantomjs-launcher), a plugin launcher for PhamtonJS browser
- [karma-coverage](https://github.com/karma-runner/karma-coverage), a plugin to generate coverage using [Istanbul](https://github.com/gotwarlost/istanbul)
- [karma-mocha](https://github.com/karma-runner/karma-mocha), a adapter for Mocha testing framework
- [karma-mocha-reporter](https://github.com/litixsoft/karma-mocha-reporter), a plugin to report with mocha style logging
- [gulp-nightwatch](https://www.npmjs.com/package/gulp-nightwatch), a gulp plugin for Nightwatch.js

The rest of tools in package.json are for gulp tasks: create web server, livereloading, open browser...

## Up and running

This will run the app on port 8080

    $ gulp serve

## Running Unit tests

    $ gulp specs

## Running E2E tests
1. Create a folder for install Selenium Server and the ChromeDriver in your project, e.g.: *bin/selenium* and *bin/chromedriver*
 
        $ mkdir -p ./bin/selenium
        $ mkdir ./bin/chromedriver

2. Install Selenium Server. Download the latest version of **selenium-server-standalone-{VERSION}.jar** file from the [Selenium downloads page](http://selenium-release.storage.googleapis.com/index.html) and place it on *bin/selenium* folder

3. Install ChromeDriver. [Download the latest version of WebDriver](http://chromedriver.storage.googleapis.com/index.html) if you want to run the e2e test under Chrome browser environment (You must have installed Chrome browser as well) and place it on *bin/chromedriver* folder

4. Running the e2e tests
    
        $ gulp e2e 

# Getting started with Unit Testing

## 1. Mocha

Mocha is a test framework running on Node.js and in the browser. If you would like to try Mocha in Node.js:

    $ npm install -g mocha
    $ npm install chai
    $ mkdir test
    $ $EDITOR test/test.js
 
### In your editor:

```javascript
var assert = require('chai').assert;
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
```

### Back in terminal to run the test:

    $ mocha

      .

    ✔ 1 test complete (1ms)

## 2. Interfaces

Mocha's interfaces system allows developers to choose their style. Mocha has BDD and TDD among other interfaces

- The BDD interface provides *describe(), context(), it(), before(), after(), beforeEach()* and *afterEach()*

    ```javascript
    describe('', function() {
        before(function() {
            //
        });
        describe('', function() {
            it('', function() {
                //
            })
        });
        after(function() {
            //
        })
    });
    ```

- The TDD interface provides *suite(), test(), suiteSetup(), suiteTeardown(), setup()* and *teardown()*:

    ```javascript
    suite('', function() {
        setup(function() {
            //
        });
        suite('', function() {
            test('', function() {
                //
            })
        });
        teardown(function() {
            //
        })
    });
    ```

## 3. Asertions

Mocha allows you to user any library you want. We use [Chai](http://chaijs.com/) since allows you expect(), assert() and should() style assertions.
Chai has several interfaces that allow the developer to choose the most confortable. The chain-capable BDD styles provide an expressive language & readable style,
while the TDD assert style provides a more classical feel.


 - ### Should

    ```javascript
    chai.should();

    foo.should.be.a('string');
    foo.should.equal('bar');
    foo.should.have.length(3);
    tea.should.have.property('flavors')
    .with.length(3);
    ```

 - ### Expect
    ```javascript
    var expect = chai.expect;

    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.length(3);
    expect(tea).to.have.property('flavors')
    .with.length(3);
    ```

 - ### Assert
    ```javascript
    var assert = chai.assert;

    assert.typeOf(foo, 'string');
    assert.equal(foo, 'bar');
    assert.lengthOf(foo, 3)
    assert.property(tea, 'flavors');
    assert.lengthOf(tea.flavors, 3);
    ```

## 4. Reporters

  - *Spec* is the default reporter. The *spec* reporter outputs a hierarchical view nested just as the test cases are

  ![Spect reporter](https://mochajs.org/images/reporter-spec.png)
  ![Spect reporter](https://mochajs.org/images/reporter-spec-fail.png)

  - *Dot* is simply a series of dots that represent test cases, failures highlight in red, pending in blue, slow as yellow. Good if you would like minimal output
  
  ![Dot reporter](https://mochajs.org/images/reporter-dot.png)

  - [For other reports](https://mochajs.org/#reporters)

## Running Mocha in the Browser

Mocha has browser support and it is able to run the test in a browser environment instead of Node.js environment. A typical setup might look something like the following, where we call *mocha.setup('bdd')* to use the BDD interface 
before loading the test scripts, running them with *mocha.run()*


```html
<html>
    <head>
        <meta charset="utf-8">
        <title>Mocha Tests</title>
    	<link href="https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.css" rel="stylesheet" />
    </head>
    <body>
        <div id="mocha"></div>

        <script src="https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>

        <script>
            mocha.setup({
                ui: 'tdd'
            });
        </script>
        <script src="test.js"></script>
        <script>
            mocha.run();
        </script>
    </body>
</html>
```

## 5. Karma

Karma runs on Node.js and is available as an NPM package. The main goal for Karma is to bring a productive testing environment to developers where they don't have to set up loads of configurations.
Karma is essentially a tool which spawns a web server that executes source code against test code for each of the browsers connected. 
The results for each test against each browser are examined and displayed via the command line to the developer such that they can see which browsers and tests passed or failed.

### Installing Karma

The recommended approach is to install karma locally in the project's directory

    # Install Karma
    $ npm install karma --save-dev

### Configuration

In order to serve you well, Karma needs to know about your project in order to test it and this is done via a configuration file (karma.conf.js)
If you install Karma globally, the easiest way to generate an initial configuration file is by using the karma *init command*

    $ npm install -g karma-cli
    $ karma init

Note: Check out *karma.conf.js* file in this project, for more information about its configure (testing framework, reporters, browsers...)

### Plugins

Karma can be easily extended through plugins. In fact, all the existing preprocessors, reporters, browser launchers and frameworks are plugins

Main plugin needed:

- [karma-mocha](https://github.com/karma-runner/karma-mocha) is an adapter for Mocha testing framework
- [karma-chrome-launcher](https://github.com/karma-runner/karma-chrome-launcher) is a launcher for Chrome browser
- [karma-phantom-launcher](https://github.com/karma-runner/karma-phantomjs-launcher) is a launcher for PhantomJS browser
- [karma-mocha-reporter](https://github.com/litixsoft/karma-mocha-reporter) is Karma reporter with mocha style logging
- [karma-coverage](https://github.com/karma-runner/karma-coverage/) generate code coverage using [Istambul](https://github.com/gotwarlost/istanbul)


## 6. PhantomJS

PhantomJS is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.
One major use case of PhantomJS is headless testing of web applications. It is suitable for general command-line based testing and as part of a continuous integration system.

To install PhantomJS via NPM use [phantomjs-prebuilt](https://www.npmjs.com/package/phantomjs-prebuilt). 
What this installer is really doing is just grabbing a particular "blessed" (by this module) version of Phantom

## 7. Istambul

Istambum is a JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. 
Supports all JS coverage use cases including unit tests, server side functional tests and browser tests.

The easiest way is to install karma-coverage as a devDependency, by running

    $ npm install --save-dev karma-coverage

To know how configure Istambul through *karma.conf.js* file take a look at the following attributes

```javascript
// karma.conf.js
module.exports = function(config) {
  config.set({
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],

    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};
```

## 8. Unit test with gulp tasks

To launch the unit tests through a gulp task, just create a new Karma Server with its configuration file and start it

```javascript
var Server = require('karma').Server;

gulp.task('specs', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
```

# Getting started with E2E Testing

## 1. Selenium

Selenium is a very popular set of tools for browser automation. It is composed of several main projects like Selenium WebDriver, among others.
Nightwatch uses de WebDriver to perform the browser automation related tasks

### Running the Selenium Server

The Selenium Server runs separately on the machine with the browser you want to test. You will need to have the Java Development Kit (JDK) installed, minimum required version is 7. You can check this by running **java -version** from the command line.
Download the latest version of **selenium-server-standalone-{VERSION}.jar** file from the [Selenium downloads page](http://selenium-release.storage.googleapis.com/index.html) and place it on the computer with the browser you want to test

### Running Selenium Automatically

If the server is on the same machine where Nightwatch is running, it can be started/stopped directly by the Nightwatch

### Running Selenium Manually

    $ java -jar selenium-server-standalone-{VERSION}.jar

## 2. Nightwatch

Nightwatch is an easy to use Node.js based E2E testing solution. It uses Selenium WebDriver API to perform commands and assertions on DOM elements. It works by sending HTTP requests to the Selenium server with the right parameters and interpreting the response
If you would like to try Nightwatch in Node.js:

    $ npm install -g nightwatch

### Configuration

Nightwatch expects a configuration file to be passed, using by default a *nightwatch.json* file in the project's root folder
Note: Check out *nightwatch.json* file in this project or [Nightwatch Web Page](http://nightwatchjs.org/guide#settings-file) for more information about its configure

Some of the most important:

- src_folders
- selenium.start_process
- selenium.server_path
- selenium.cli_args.webdriver.chromedriver
- test_runner
- test_settings.default

### Chrome WebDriver

**selenium-server-standalone-{VERSION}.jar** included the WebDriver for some browsers like Firefox. But if you want to run the tests using Chrome browser you have to download the ChromeDriver binary and specify it's location in *nightwath.json*
Also don't forget to specify chrome as the browser name in the desiredCapabilities property.

### Using Nightwatch

Create a separate folder for tests in your project, e.g.: E2E. Each file inside it will be loaded as a test by the Nightwatch test runner.
A basic test will look like this:

```javascript
module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
```

### Running the test

1. Run the app. It's posible to use gulp connect if you don't want the browser to open

            $ gulp serve

2. Launch selenium server and E2E test in a chrome environment instead of firefox default environment

            $ nightwatch --env chrome_env

            .

            Starting selenium server... started - PID:  18806

            Demo E2E
                ✓ Demo test Google (320ms)

            1 passing (4s)

### Using Mocha

Nightwatch is bundled with a custom version of the popular Mocha test runner which allows running tests using Mocha, thus taking advantage of its interfaces and reporters
This is done by specifying the "test_runner" option in the nightwatch.json configuration file.

```javascript
{
  ...
  "test_runner" : "mocha"
  ...
}
```

```javascript
{
  ...
  "test_runner" : {
    "type" : "mocha",
    "options" : {
      "ui" : "tdd",
      "reporter" : "list"
    }
  }
  ...
}
```

### Example

```javascript
describe('Google demo test for Mocha', function() {

    before(function(client, done) {
      done();
    });

    after(function(client, done) {
      client.end(function() {
        done();
      });
    });

    it('uses BDD to run the Google simple test', function(client) {
      client
        .url('http://google.com')
        .expect.element('body').to.be.present.before(1000);

      client.setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
        .pause(1000)
        .assert.containsText('#main', 'Night Watch');
    });

});
```

## 3. Unit test with gulp tasks

Running the E2E tests through a gulp task (in chrome_env enviroment). Don't foget the app has to be up and running before launch the e2e gulp task

```javascript
var nightwatch = require('gulp-nightwatch');

gulp.task('e2e', function() {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json',
      cliArgs: ['--env chrome_env']}));
});
```

