import { collection, doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../context/authContext';
import { FIRESTONE } from '../firebase/firebase.config';

export const useNewPurchaseOrder = async () => {
    const { user } = useAuth();
    const date = new Date().toLocaleString() + "";
    const data = { user, date };
    const newOrder = doc(collection(FIRESTONE, "orders"));
    try {
        await setDoc(newOrder, data);
        return true
    } catch(e) {
        console.log(e);
        return false;
    }
}
