// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAmVGUXPAijc9Z7j8VgoH2Tb7U_X21lKg",
  authDomain: "proyecto-react-fdeb1.firebaseapp.com",
  projectId: "proyecto-react-fdeb1",
  storageBucket: "proyecto-react-fdeb1.appspot.com",
  messagingSenderId: "57148657598",
  appId: "1:57148657598:web:15c80af8aadd9821b9b3ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
