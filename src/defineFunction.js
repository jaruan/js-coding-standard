'use strict';

/**
 * Defining the coding standard of the function
 * you can also refer the test demo. ./test/test-mocha.js
 */

const defineFunction = {  //This object name is named by the filename.
    _sum: (x, y) => { //Private functions are prefixed with an underscore.
        console.log('This is a private function');

        return x + y;
    },
    calculate: () => {
        const result = defineFunction._sum(1, 1); //Invoke the private function
        console.log(`Invoked the sum function, result: ${result}`);
        console.log('This is a public function');
    }
};

module.exports = defineFunction;
