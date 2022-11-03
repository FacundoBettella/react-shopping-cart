import React from "react";
import { useGetUserPurchaseOrders } from "../../hooks/useGetUserPurchaseOrders";
import { OrderItem } from "./orderItem";
import { OrdersItemsContainer, Title } from "./styles";
import { useAuth } from "../../context/authContext";
import { Layout, Loading } from "../../components";

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
      <Layout title="Mi Historial"/>
      <OrdersItemsContainer>
        <Title>MIS COMPRAS</Title>
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
