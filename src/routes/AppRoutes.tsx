import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import routes from './router'

const AppRoutes = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default AppRoutes;