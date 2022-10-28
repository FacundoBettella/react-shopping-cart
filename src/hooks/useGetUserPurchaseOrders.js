import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { FIRESTONE } from '../firebase/firebase.config';

export const useGetUserPurchaseOrders = (userEmail) => {
    const [orders, setOrders] = useState(null);
   
    const getOrders = async (entity)  =>{
        const q = query(collection(FIRESTONE,entity), where("userEmail","==",userEmail));
        //const dataResponse = await getDocs(collection(FIRESTONE, entity));
        const dataResponse = await getDocs(q);
        let purchaseOrders = dataResponse.docs
            .map((doc) => ({ ...doc.data() }))
        setOrders(purchaseOrders);        
    }
    
    useEffect (()=>{
        getOrders("orders")
    },[]);

    return {orders}
}
