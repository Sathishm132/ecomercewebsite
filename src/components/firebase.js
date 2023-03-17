import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/database";




const firebaseConfig = {
  apiKey: "AIzaSyDCR5rUw0Y_wizK-phDVLRRJ7mQ2qYxa0g",
  authDomain: "react-http-dea87.firebaseapp.com",
  databaseURL: "https://react-http-dea87-default-rtdb.firebaseio.com",
  projectId: "react-http-dea87",
  storageBucket: "react-http-dea87.appspot.com",
  messagingSenderId: "777185807128",
  appId: "1:777185807128:web:57e580f6d9750a799dec6d"
};


const db = initializeApp(firebaseConfig);
export default db.database().ref()