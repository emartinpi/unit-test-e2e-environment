
var expect = chai.expect;

describe('Suite Test:', function() {

    describe('add() context', function() {
        it('params must be numbers', function() {
            expect(add.bind(null, 'a', 'b')).to.throw(Error);
            expect(add.bind(null, 'a', 5)).to.throw(Error);
            expect(add.bind(null, 5, 'a')).to.throw(Error);
            expect(add.bind(null, 5, 3)).to.not.throw(Error);
        });  
        it('must return number1 + number2', function() {
            expect(add(5, 3)).to.equal(8);
        });  
    });

    describe('subtract() context', function() {
        it('params must be numbers', function() {
            expect(subtract.bind(null, 'a', 'b')).to.throw(Error);
            expect(subtract.bind(null, 'a', 5)).to.throw(Error);
            expect(subtract.bind(null, 5, 'a')).to.throw(Error);
            expect(subtract.bind(null, 5, 3)).to.not.throw(Error);
        });  
        it('must return number1 - number2', function() {
            expect(subtract(5, 3)).to.equal(2);
        }); 
    });

    describe('multiply() context', function() {
        it('params must be numbers', function() {
            expect(multiply.bind(null, 'a', 'b')).to.throw(Error);
            expect(multiply.bind(null, 'a', 5)).to.throw(Error);
            expect(multiply.bind(null, 5, 'a')).to.throw(Error);
            expect(multiply.bind(null, 5, 3)).to.not.throw(Error);
        }); 
        it('must return number1 * number2', function() {
            expect(multiply(2, 4)).to.be.equal(8);
        });
    });

    describe('divide() context', function() {
        it('params must be numbers', function() {
            expect(divide.bind(null, 'a', 'b')).to.throw(Error);
            expect(divide.bind(null, 'a', 5)).to.throw(Error);
            expect(divide.bind(null, 5, 'a')).to.throw(Error);
            expect(divide.bind(null, 5, 3)).to.not.throw(Error);
        }); 
        it('must return number1 / number2', function() {
            expect(divide(40, 10)).to.be.equal(4);
        });
        it('divide by zero throws an error with an specific message', function() {
            expect(divide.bind(null, 5, 0)).to.throw(Error, 'Divide by zero is not posible');
        })
    });

    describe('dividePromise() context', function() {
        before(function() {
            sinon.stub(window, 'divide').withArgs(10, 2).returns(5);
        });

        after(function() {
             window.divide.restore();
        });

        it('the callback should be called', function() {
            var spyCallback = sinon.spy();

            expect(spyCallback.called).to.be.false;
            var promise = dividePlus1Promise(10, 2, 1000)
                .then(spyCallback);

            setTimeout(function(){
                expect(spyCallback.called).to.be.true;
            }, 1100);

            // the promise is returned to mocha can handle it. If promise is rejected the test will fail
            return promise;
        });

        it('should returns the division plus 1', function() {
            var promise = dividePlus1Promise(10, 2, 1000)
                .then(function(res) {
                    expect(res).to.be.equal(6);
                });

            return promise;
        });
    });
});
