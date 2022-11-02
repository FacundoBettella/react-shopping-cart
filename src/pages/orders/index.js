import React from "react";
import { useGetUserPurchaseOrders } from "../../hooks/useGetUserPurchaseOrders";
import { OrderItem } from "./orderItem";
import { OrdersItemsContainer, Title } from "./styles";
import { useAuth } from "../../context/authContext";
import { Loading } from "../../components";

export const OrderHistory = () => {
  const { user } = useAuth();

  const { orders, loading } = useGetUserPurchaseOrders(user.email);

  const styles = {
    width: "100%",
    minHeight: "93vh",
    color: "var(--text-primary)",
    backgroundColor: "var(--background)"
  };

  return (
    <div style={styles}>
      <OrdersItemsContainer>
        <Title>Mi historial de compras</Title>
        {loading ? (
          <Loading loading={loading} />
        ) : (
          orders.map((order, i) => (
            <OrderItem order={order} key={`${i}-${order.email}`} />
          ))
        )}
      </OrdersItemsContainer>
    </div>
  );
};
