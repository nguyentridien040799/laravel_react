/* ============
 * Actions for the article module
 * ============
 *
 * The actions that are available on the
 * article module.
 */

import {
    CATEGORY_LIST, CATEGORY_ADD
} from './action-types';

export function list(payload) {
    return {
        type: CATEGORY_LIST,
        payload
    }
}

export function add(payload) {
    return {
        type: CATEGORY_ADD,
        payload
    }
}