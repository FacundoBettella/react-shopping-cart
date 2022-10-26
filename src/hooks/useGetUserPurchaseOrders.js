import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { FIRESTONE } from '../firebase/firebase.config';

export const useGetUserPurchaseOrders = (userEmail) => {
    const [orders, setOrders] = useState(null);

    const getOrders = async (entity)  =>{
        const dataResponse = await getDocs(collection(FIRESTONE, entity));
        let purchaseOrders = dataResponse.docs
            .map((doc) => ({ ...doc.data() }))
            .filter(order=>order.userEmail === userEmail);
        setOrders(purchaseOrders);        
    }
    
    useEffect (()=>{
        getOrders("orders")
    },[]);

    return {orders}
}
