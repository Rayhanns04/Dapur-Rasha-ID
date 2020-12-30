import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiil3ZZp-9XozbAI0xJxyO2K1vkKuL5L4",
  authDomain: "dapurrasha-f1be4.firebaseapp.com",
  projectId: "dapurrasha-f1be4",
  storageBucket: "dapurrasha-f1be4.appspot.com",
  messagingSenderId: "856354717906",
  appId: "1:856354717906:web:d816ca434557dbfa8c6d0b",
  measurementId: "G-QY5CKNZ8SH",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
