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

    it('ui ready', function(client) {
      client.expect.element('#input1').to.be.present.before(1000);
      client.expect.element('#input2').to.be.present.before(1000);
      client.expect.element('#calculate').to.be.present.before(1000);
    })

    it('add, subtract, multiply and divide behaviours', function(client, done) {
      client
        .setValue('#input1', 12)
        .setValue('#input2', 3)
        .click('#calculate')
        .pause(1500);
        
        client.expect.element('#resAdd').text.to.equal('12 + 3 = 15');
        client.expect.element('#resSub').text.to.equal('12 - 3 = 9');
        client.expect.element('#resMul').text.to.equal('12 * 3 = 36');
        client.expect.element('#resDiv').text.to.equal('12 / 3 = 4');
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
