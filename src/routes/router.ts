import React from 'react'
import AboutUs from '../pages/AboutUs';
import Error404 from '../pages/Error404';

import Home from '../pages/Home'
import Products from '../pages/Products';

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
        path: '/sobre-nos',
        component: AboutUs,
    },
    {
        path:'/error-404',
        component: Error404
    },
    {
        path: '/produtos',
        component: Products,
    },
    {
        path: '*',
        redirect: '/error-404'
    }
]

export default routes;