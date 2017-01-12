'use strict';

let {
    n, view
} = require('kabanery');

/**
 * data = {
 *    hide,
 *    head,
 *    body
 * }
 */
module.exports = view((data, {
    update
}) => {
    if (data.hide === undefined) data.hide = true;

    let hide = () => update('hide', true);
    let show = () => update('hide', false);
    let toggle = () => update('hide', !data.hide);
    let isHide = () => data.hide;

    let ops = {
        hide, show, toggle, isHide
    };

    return n('div', [
        data.head(ops), !isHide() && data.body(ops)
    ]);
});
