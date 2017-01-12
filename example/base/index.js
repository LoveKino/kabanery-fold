'use strict';

let fold = require('../..');

let foldArrow = require('../../lib/foldArrow');

let {
    n
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

document.body.appendChild(fold({
    head, body
}));
