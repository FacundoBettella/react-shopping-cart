import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { FIRESTONE } from '../firebase/firebase.config';

export const useGetUserPurchaseOrders = (userEmail) => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const mounted = useRef(false);

  const getOrders = async (entity) => {
    if (mounted.current) {
      const userOrders = query(
        collection(FIRESTONE, entity),
        where('userEmail', '==', userEmail)
      );
      const dataResponse = await getDocs(userOrders);
      let purchaseOrders = dataResponse.docs.map((doc) => ({ ...doc.data() }));
      setOrders(purchaseOrders);
      setLoading(false);
    }
  };

  useEffect(() => {
    mounted.current = true;

    getOrders('orders');

    return () => (mounted.current = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { orders, loading };
};
