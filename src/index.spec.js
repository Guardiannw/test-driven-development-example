const {
    expect
 } = require('chai');

 const {
     fib
 } = require('./index');

describe('fibonnacci function', () => {
    it('should throw an error if the parameter is less than one', () => {
        expect(() => {
            fib(0);
        }).to.throw();
    });

    it('should throw an error if the parameter is not a number', () => {
        expect(() => {
            fib('hello');
        }).to.throw();
    });

    it('should throw an error if the number is not an integer', () => {
        expect(() => {
            fib(2.2);
        }).to.throw();
    });

    it('should return 0 if the parameter is 1', () => {
        expect(fib(1)).to.equal(0);
    });

    it('should return 1 if the parameter is 2', () => {
        expect(fib(2)).to.equal(1);
    });

    it('should return the correct fib number for a given parameter', () => {
        expect(fib(12)).to.equal(89);
    });
});