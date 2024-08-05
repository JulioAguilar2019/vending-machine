import { Route, Routes } from 'react-router-dom'
import { PublicRoutes } from '../models/routes.model'
import { Home, OrdersDelivered, OrdersPending } from '../pages'
import NotFound from '../pages/NotFound/NotFound'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />}></Route>

            <Route index element={<Home />} />

            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.DELIVERED} element={<OrdersDelivered />} />
            <Route path={PublicRoutes.PENDING} element={<OrdersPending />} />
        </Routes>
    )
}
