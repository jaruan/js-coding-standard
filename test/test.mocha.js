'use strict';

const sinon = require('sinon');
const defineFunction = require('../src/defineFunction');
const DefineClass = require('../src/defineClass');

describe('test', () => {
    describe('Mocha Function', () => {
        let mockSumFunction;

        beforeEach(() => {
            mockSumFunction = sinon.stub(defineFunction, '_sum').callsFake(() => {
                console.log('Mock sum method');

                return 1 + 2;
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
});
