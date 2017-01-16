'use strict';

let {
    n
} = require('kabanery');

let angle = require('css-shapes-object/lib/angle');

module.exports = (ops) => {
    return n('span', {
        style: {
            display: 'inline-block',
            paddingRight: 8
        }
    }, angle({
        direction: ops.isHide() ? 'bottom' : 'top',
        length: 5,
        color: '#666666'
    }));
};
