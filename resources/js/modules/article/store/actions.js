/* ============
 * Actions for the article module
 * ============
 *
 * The actions that are available on the
 * article module.
 */

import {
  ARTICLE_ADD,
  ARTICLE_UPDATE,
  ARTICLE_REMOVE,
  ARTICLE_LIST,
  ARTICLE_LIST_BY_CATEGORY
} from './action-types';

export function add(payload) {
  return {
    type: ARTICLE_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: ARTICLE_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: ARTICLE_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: ARTICLE_LIST,
    payload
  }
}

export function listArticleByCategory(payload) {
  return {
    type: ARTICLE_LIST_BY_CATEGORY,
    payload
  }
}