import { combineReducers } from 'redux'

import auth from '../modules/auth/store/reduer'
import user from '../modules/mypage/user/store/reducer'
import articles from '../modules/mypage/article/store/reducer'
import categories from '../modules/category/store/reducer'

export default combineReducers({ auth, user, articles, categories })
