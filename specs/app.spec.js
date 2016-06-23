
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
    })
});

describe.skip('Trying skipped suite', function() {
    it('should take less than 500ms', function(done){
        this.timeout(10000);
        setTimeout(done, 8000);
    }); 
});
