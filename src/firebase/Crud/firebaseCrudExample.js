import { collection, addDoc, getDocs } from "firebase/firestore";
import user from "../models/user";

user.email = "user@gmail.com";
user.name = "username";
user.phone = "+54388551496";
user.date = Date.now();
user.items = ["tv", "microwave"];

const addData = async () => {
  try {
    const dbResponse = await addDoc(collection(db, "users"), user);
    console.log("Document written with ID: ", dbResponse.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};
