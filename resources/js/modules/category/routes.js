// import lib
import { lazy } from 'react'

const routes = [
    {
        path: '/category/:slug',
        exact: true,
        component: lazy(() => import('./pages/blog/details')),
    },
]

export default routes
