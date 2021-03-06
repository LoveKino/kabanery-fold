'use strict';

let fold = require('../..');

let foldArrow = require('../../lib/foldArrow');

let {
    n, mount
} = require('kabanery');

let head = (ops) => n('div', {
    onclick: () => {
        ops.toggle();
    }
}, [
    foldArrow(ops), n('span', 'test')
]);

let body = () => {
    return n('div', [
        '456'
    ]);
};

mount(fold({
    head, body
}), document.body);
