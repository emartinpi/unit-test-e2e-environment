//Mocha framework test

describe('Demo E2E', function() {

    before(function(client, done) {
      client.url(client.launchUrl, function() {
        done();
      })
    });

    after(function(client, done) {
      client.end(function() {
        done();
      });
    });

    it('add behaviour', function(client) {
      client
        .expect.element('#btnAdd').to.be.present.before(1000);

      client
        .click('#btnAdd')
        .pause(100)
        .expect.element('#result').text.to.equal('3');
    });

    it('subtract behaviour', function(client) {
      client
        .expect.element('#btnSub').to.be.present.before(1000);

      client
        .click('#btnSub')
        .pause(100)
        .expect.element('#result').text.to.equal('6');
    });
});



// Default framework test

// module.exports = {
//   'Demo E2E Add' : function (browser) {
//     browser
//       .url(browser.launchUrl)
//       .waitForElementVisible('#btnAdd', 500)
//       .click('#btnAdd')
//       .pause(100)
//       .assert.containsText('#result', '3')
//       .end();
//   },

//   'Demo E2E Subtract' : function (browser) {
//     browser
//       .url(browser.launchUrl)
//       .waitForElementVisible('#btnSub', 500)
//       .click('#btnSub')
//       .pause(100)
//       .assert.containsText('#result', '6');

//       browser.expect.element('#btnSub').to.be.visible;
//       browser.end();
//   },
// };
