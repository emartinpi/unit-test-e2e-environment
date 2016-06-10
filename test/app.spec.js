
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
});

describe.skip('Trying skipped suite', function() {
    it('should take less than 500ms', function(done){
        this.timeout(10000);
        setTimeout(done, 8000);
    }); 
});
