import {
    CATEGORY_ADD,
    CATEGORY_LIST
} from './action-types'

const initialState = {
    currentPage: 0,
    data: [],
    from: 0,
    lastPage: 0,
    nextPageUrl: '',
    path: '',
    perPage: 0,
    prevPageUrl: null,
    to: 0,
    total: 0,
}

const reducer = (state = initialState, { type, payload = null }) => {
    switch(type) {
        case CATEGORY_LIST:
            return list(state, payload)
        case CATEGORY_ADD:
            return add(state, payload)
        default:
            return state
    }
}

function list(state, payload) {
    state = Object.assign({}, payload)

    return state
}

function add(state, payload) {
    const category = state.data.find((category) => (category.id === payload.id))

    if (!category) {
        const data = [...state.data, payload]

        return Object.assign({}, state, { data })
    }

    return update(state, payload)
}

function update(state, payload) {
    const data = state.data.map(obj => {
        if (obj.id === payload.id) {
            return { ...obj, ...payload }
        }
        return obj
    })

    return Object.assign({}, state, { data })
}

export default reducer
