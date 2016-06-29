/**
 * (Adds two numbers)
 * 
 * @param {Number} n1 
 * @param {Number} n2
 * @returns {Number}
 */
function add(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Parameters must be numbers');
    }
    return n1 + n2;
}

/**
 * (Subtract two numbers)
 * 
 * @param {Number} n1 
 * @param {Number} n2
 * @returns {Number}
 */
function subtract(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Parameters must be numbers');
    }
    return n1 - n2;
}

/**
 * (Multiply two numbers)
 * 
 * @param {Number} n1 
 * @param {Number} n2
 * @returns {Number}
 */
function multiply(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Parameters must be numbers');
    }
    return n1 * n2;
}

/**
 * (Divide two numbers. The result is with two dicimals max)
 * 
 * @param {Number} n1 
 * @param {Number} n2
 * @returns {Number} (two decimals max)
 */
function divide(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Parameters must be numbers');
    }

    if (n2 === 0) {
        function DivideByZeroError(message) {
            this.message = message;
        }
        DivideByZeroError.prototype = new Error();
        throw new DivideByZeroError('Divide by zero is not posible');
    }

    return Math.round(n1 / n2 * 100) / 100
}

/**
 * (Divide two numbers after 'time' ms. The result is with two dicimals max)
 * 
 * @param {Number} n1 
 * @param {Number} n2
 * @param {Number} miliseconds
 * @returns {Promise} (The promise will be resolved after 'time' ms)
 */
function dividePlus1Promise(n1, n2, time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var res = divide(n1, n2) + 1;
            resolve(res);
        }, time);
    });
}