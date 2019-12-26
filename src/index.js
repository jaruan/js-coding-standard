'use strict';

const ServiceClass = require('./serviceClass');

(() => {
    const serviceClass = new ServiceClass();
    serviceClass.test();

    const serviceClass2 = new ServiceClass();
    serviceClass2.test();
})();
