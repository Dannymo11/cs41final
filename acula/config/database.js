import { database } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

  const data = await getDocs(usersCollectionRef)
  export const userArr = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
