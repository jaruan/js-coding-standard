'use strict';

const DefineClass = require('./defineClass');
const defineFunction = require('./defineFunction');

const defineClass = new DefineClass();

class ServiceClass {
    test() {
        defineClass.calculate();
        defineFunction.calculate();
        DefineClass.staticFunction();
    }
}

module.exports = ServiceClass;
