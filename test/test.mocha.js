'use strict';

const sinon = require('sinon');
const defineFunction = require('../src/defineFunction');
const otherFunction = require('../src/otherFuncton');
const DefineClass = require('../src/defineClass');
const ServiceClass = require('../src/serviceClass');

describe('test', () => {
    describe('Mocha Function', () => {
        let mockSumFunction;

        beforeEach(() => {
            mockSumFunction = sinon.stub(defineFunction, '_sum').callsFake(() => {
                console.log('Mock sum method');

                return 1 + 2;
            });
            sinon.stub(otherFunction, 'other').callsFake(() => {
                console.log('This is mock other function.');
            });
        });

        afterEach(() => {
            mockSumFunction.restore();
        });

        it('test function', () => {
            defineFunction.calculate();
        });
    });
    describe('Mocha Class', () => {
        let mockSumFunction;

        beforeEach(() => {
            mockSumFunction = sinon.stub(DefineClass.prototype, '_sum').callsFake(() => {
                console.log('Mock sum method');
            });
        });

        afterEach(() => {
            mockSumFunction.restore();
        });


        it('test class', () => {
            const defineClass = new DefineClass('Hello');
            defineClass.calculate();
        });
    });
    describe.only('Mock service class', () => {
        it('test service class', () => {
            sinon.stub(defineFunction, 'calculate').callsFake(() => {
                console.log('Mock calculate function');
            });
            sinon.stub(DefineClass, 'staticFunction').callsFake(() => {
                console.log('Mock static function');
            });
            const service = new ServiceClass();
            service.test();
        });
    });
});
