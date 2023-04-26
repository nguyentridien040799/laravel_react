import Http from "../../utils/Http";
import * as categoryActions from "../category/store/actions";
import Transformer from "../../utils/Transformer";
import * as articleActions from '../article/store/actions'

function transformRequest(parms) {
    return Transformer.send(parms)
}

function transformResponse(params) {
    return Transformer.fetch(params)
}

export function categoryListRequest(params) {
    let { pageNumber = 1, url = 'api/v1/categories' } = params

    return dispatch => {
        if (pageNumber > 1) {
            url = url + `?page=${pageNumber}`
        }

        Http.get(url)
            .then((res) => {
                dispatch(categoryActions.list(transformResponse(res.data)))
            })
            .catch((err) => {
                // TODO: handle err
                console.error(err.response)
            })
    }
}

export function categoryListArticleRequest(slug) {
    return dispatch => {
        Http.get(`api/v1/categories/${slug}/articles`)
            .then((res) => {
                dispatch(articleActions.listArticleByCategory(transformResponse(res.data)))
            })
            .catch((err) => {
                // TODO: handle err
                console.error(err.response)
            })
    }
}