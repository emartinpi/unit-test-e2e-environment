/**
 * (Adds two numbers)
 * 
 * @param {Number} n1 
 * @param {Number} n2
 * @returns {Number}
 */
function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
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
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
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
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
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
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Parameters must be numbers');
    }

    return Math.round(n1 / n2 * 100) / 100
}