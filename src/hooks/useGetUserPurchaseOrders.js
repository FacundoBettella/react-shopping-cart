import { collection, query, where, getDocs } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { FIRESTONE } from "../firebase/firebase.config";

export const useGetUserPurchaseOrders = (userEmail) => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);

  const getOrders = useCallback(async (entity) => {
    
      const userOrders = query(collection(FIRESTONE, entity), where("userEmail", "==", userEmail));
      const dataResponse = await getDocs(userOrders);
      let purchaseOrders = dataResponse.docs.map((doc) => ({ ...doc.data() }));
      setOrders(purchaseOrders);
      setLoading(false);

    },[userEmail]);

  useEffect(() => {
    getOrders("orders");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { orders, loading };
};
