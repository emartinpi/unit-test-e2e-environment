# Set up a project with testing tools using Mocha & Karma

This guide shows you the basics to create an environmnet where you can test your code with the following tools:

- [Gulp](http://gulpjs.com/), a toolkit that help you automate painful task
- [Mocha](https://mochajs.org/) for a test framework with sopport for BDD and TDD
- [Chai](http://chaijs.com/) for assertion types than can be used with Mocha
- [Karma](https://karma-runner.github.io/0.13/index.html), A test runner. A js command line tool to spawn a web server which loads your app source code and executes your test
- [PhamtomJS](http://phantomjs.org/) is a Webkit scriptable, headless browser used for automating web page interaction
- [Istambul](https://github.com/gotwarlost/istanbul), a js code coverage tool that computes statement line, functions and branchs

## Install gulp globally

    $ npm install -g gulp

## Install the rest of dependencies of package.json

    $ npm install

This command will install the next devDependencies among the others:

- [karma-chrome-launcher](https://github.com/karma-runner/karma-chrome-launcher), a plugin launcher for Chrome browser
- [karma-phantomjs-launcher](https://github.com/karma-runner/karma-phantomjs-launcher), a plugin launcher for PhamtonJS browser
- [karma-coverage](https://github.com/karma-runner/karma-coverage), a plugin to generate coverage using [Istanbul](https://github.com/gotwarlost/istanbul)
- [karma-mocha](https://github.com/karma-runner/karma-mocha), a adapter for Mocha testing framework
- [karma-mocha-reporter](https://github.com/litixsoft/karma-mocha-reporter), a plugin to report with mocha style logging


The rest of tools in package.json are for gulp tasks: create web server, livereloading...

## Up and running
This will run the app on port 8080

    $ gulp serve

## Running test

    $ gulp test

# Getting started

## 1. Mocha

Mocha is a test framework running on Node.js and in the browser. If you would like to try Mocha in Node.js:

    $ npm install -g mocha
    $ npm install chai
    $ mkdir test
    $ $EDITOR test/test.js
 
In your editor:

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

Back in terminal to run the test:

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

Mocha has browser support and it is able to run the test in a browser environment. A typical setup might look something like the following, where we call *mocha.setup('bdd')* to use the BDD interface 
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
    karma init

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
