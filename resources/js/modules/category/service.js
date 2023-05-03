import Http from "../../utils/Http";
import * as categoryActions from "../category/store/actions";
import Transformer from "../../utils/Transformer";
import * as articleActions from '../mypage/article/store/actions'

function transformResponse(params) {
    return Transformer.fetch(params)
}

function transformRequest(params) {
    return Transformer.send(params)
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

export function categoryListArticleRequest(slug, pageNumber = 1) {
    return dispatch => {
        let url = `api/v1/categories/${slug}/articles`;

        if (pageNumber > 1) {
            url = url + `?page=${pageNumber}`
        }

        Http.get(url)
            .then((res) => {
                dispatch(articleActions.listArticleByCategory(transformResponse(res.data)))
            })
            .catch((err) => {
                // TODO: handle err
                console.error(err.response)
            })
    }
}

export function categoryAddRequest(params) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('api/v1/categories', transformRequest(params))
                .then(res => {
                    dispatch(categoryActions.add(transformResponse(res.data)))
                    return resolve()
                })
                .catch((err) => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };

                    if (statusCode === 422) {
                        const resetErrors = {
                            errors: err.response.data,
                            replace: false,
                            searchStr: '',
                            replaceStr: '',
                        };
                        data.error = Transformer.resetValidationFields(resetErrors);
                    } else if (statusCode === 401) {
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}