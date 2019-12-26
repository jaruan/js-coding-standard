'use strict';

const { other } = require('./otherFuncton');

/**
 * Defining the coding standard of the function
 * you can also refer the test demo. ./test/test-mocha.js
 */
module.exports._sum = (x, y) => { //Private functions are prefixed with an underscore.
    console.log('This is a private function');

    return x + y;
};

module.exports.calculate = () => {
    const result = this._sum(1, 1); //Invoke the private function
    other();
    console.log(`Invoked the sum function, result: ${result}`);
    console.log('This is a public function');
};
