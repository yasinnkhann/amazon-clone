import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyDiGBiQV0fHEc6HEKZCnP6UuzreZvU7eyQ",
  authDomain: "clone-ce636.firebaseapp.com",
  projectId: "clone-ce636",
  storageBucket: "clone-ce636.appspot.com",
  messagingSenderId: "1083492099974",
  appId: "1:1083492099974:web:cb9b4e8fac9118edb1ae07",
  measurementId: "G-PVMK3S5ZVF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };