import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import routes from './router'

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Nav />
            <Routes>
                {
                    routes.map(route => {
                        const { path, component: Component, redirect } = route
                        if(Component) {
                            return <Route path={path} element={<Component />}/>
                        }

                        if(redirect) {
                            return <Route path={path} element={<Navigate to={redirect} replace/>} />
                        }
                        
                    })
                }
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;