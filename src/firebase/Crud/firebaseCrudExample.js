import { collection, addDoc, getDocs } from "firebase/firestore";
import { FIRESTONE } from "../firebase.config";

export const addData = async (entity, object) => {
  try {
    const dbResponse = await addDoc(collection(FIRESTONE, entity), object);
    console.log("Document written with ID: ", dbResponse.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getData = async (entity) => {
  try {
    const dataResponse = await getDocs(collection(FIRESTONE, entity));
    dataResponse.forEach((doc) => {
      console.log(`${doc.data().title}`);
    });
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};
