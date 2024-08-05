import { Route, Routes } from 'react-router-dom'
import { PublicRoutes } from '../models/routes.model'
import { Home, OrdersDelivered, OrdersPending } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<div> not found</div>}></Route>

            <Route index element={<Home />} />

            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.DELIVERED} element={<OrdersDelivered />} />
            <Route path={PublicRoutes.PENDING} element={<OrdersPending />} />
        </Routes>
    )
}
