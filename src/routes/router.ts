import React from 'react'
import Error404 from '../pages/Error404';

import Home from '../pages/Home'

interface RouteType {
    path: string,
    component?: React.FC,
    redirect?: string;
}

const routes: RouteType[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path:'/error-404',
        component: Error404
    },
    {
        path: '*',
        redirect: '/error-404'
    }
]

export default routes;