import { collection, addDoc, getDocs } from "firebase/firestore";
import { FIRESTONE } from "../firebase.config";

export const addData = async (user) => {
  try {
    const dbResponse = await addDoc(collection(FIRESTONE, "user"), user);
    console.log("Document written with ID: ", dbResponse.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getData = async () => {
  try {
    const usersResponse = await getDocs(collection(FIRESTONE, "user"));
    usersResponse.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name}`);
    });
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};
