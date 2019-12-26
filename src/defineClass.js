'use strict';

const getRandomNumber = () => {
    return Math.random() * 100000;
};

class DefineClass {
    constructor(param) {
        this._param = param;
        console.log('Init DefineClass!!!!');
    }
    get param() {
        return this._param;
    }

    get randomNumber() {
        return getRandomNumber();
    }

    _sum() {  //private method
        console.log('This is a private method');
    }

    calculate() {
        this._sum();
        console.log('This is a public method');
    }

    static staticFunction() {
        console.log('This is a static function');
    }
}

module.exports = DefineClass;
