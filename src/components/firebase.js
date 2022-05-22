// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCah-jfjebmtDQZHEpuVL_VNee7DIerVls",
  authDomain: "proyecto-firebase-react-19944.firebaseapp.com",
  projectId: "proyecto-firebase-react-19944",
  storageBucket: "proyecto-firebase-react-19944.appspot.com",
  messagingSenderId: "308341982740",
  appId: "1:308341982740:web:929e494a094c20a3a0c901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);