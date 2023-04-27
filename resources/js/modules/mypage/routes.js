// import lib
import { lazy } from 'react'

export default [
    {
        path: '/mypage',
        exact: true,
        auth: true,
        component: lazy(() => import('./pages/index')),
    },
]
