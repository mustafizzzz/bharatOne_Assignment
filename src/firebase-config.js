import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkVsSUYmjq5WpXLx_PS6L3nq3rDoy55RM",
  authDomain: "react-crud-dd9cd.firebaseapp.com",
  projectId: "react-crud-dd9cd",
  storageBucket: "react-crud-dd9cd.appspot.com",
  messagingSenderId: "906438588134",
  appId: "1:906438588134:web:ef6ccf936b3895fa422d27",
  measurementId: "G-NNT8CR425K"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)