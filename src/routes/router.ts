import React from 'react'
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Error404 from '../pages/Error404';

import Home from '../pages/Home'
import Products from '../pages/Products';
import Bot from '../pages/Bot';
import Customer from '../pages/Admin/Customers';

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
        path: '/error-404',
        component: Error404
    },
    {
        path: '/produtos',
        component: Products,
    },
    {
        path: 'fale-conosco',
        component: ContactUs
    },
    {
        path: 'bot',
        component: Bot,
    },
    {
        path: 'admin/clientes',
        component: Customer,
    },
    {
        path: '*',
        redirect: '/error-404'
    }
]

export default routes;