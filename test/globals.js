/**
 * 这个文件仅用来存放全局变量
 */
'use strict';

var chai = require('chai');

// side-effect
require('should');

module.exports = {
    TEST_ROOT: __dirname,
    expect: chai.expect,
    assert: chai.assert,
};
