import React from 'react';
import Nav from '../components/Nav'

interface IPageWithNavParams {
    children: React.ReactNode
}

const PageWithNav = ({
    children
}: IPageWithNavParams) => {
    return (
        <>
            {children}
        </>
    )
}

export default PageWithNav;