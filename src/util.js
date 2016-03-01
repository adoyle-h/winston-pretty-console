'use strict';

module.exports = {
    omit: require('object.omit'),
    defaults: require('object.defaults'),
    isPlainObject: require('is-plain-object'),
    padStart: function(str, maxLength, char) {
        str = String(str);
        char = char || '0';
        return Array(maxLength - str.length + 1).join(char) + str;
    },
};
