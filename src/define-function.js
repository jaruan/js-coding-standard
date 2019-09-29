'use strict';

exports._sum = (x, y) => {
    console.log('This is a private function');

    return x + y;
};

exports.calculate = () => {
    const result = this._sum();
    console.log(`Invoked the sum function, result: ${result}`);
    console.log('This is a public function');
};
