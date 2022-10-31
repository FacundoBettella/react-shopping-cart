import React, {useContext} from "react"
import { useGetUserPurchaseOrders } from "../../hooks/useGetUserPurchaseOrders"
import { OrderItem } from "./orderItem"
import { OrdersItemsContainer } from "./styles"
import { authContext } from "../../context/authContext"
import { Loading } from "../../components"

export const OrderHistory = () => {
    const {user} = useContext(authContext);
    const {orders, loading}  = useGetUserPurchaseOrders(user.email);
    console.log(orders);
    return <OrdersItemsContainer>
        {loading ? <Loading loading={loading}/> : orders.map((order,i) => <OrderItem order={order} key={`${i}-${order.email}`} /> )}
    </OrdersItemsContainer>
}