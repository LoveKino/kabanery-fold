'use strict';

let {
    n
} = require('kabanery');

module.exports = (ops) => {
    return n('span', {
        style: {
            display: 'inline-block',
            paddingRight: 8,
            transform: ops.isHide()?'translateY(5px) rotate(90deg)':null
        }
    }, '>');
};
