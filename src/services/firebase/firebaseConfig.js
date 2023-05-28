// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6kOGLDWKTgSn_gA2CRWoAvXirYWpKfh4",
  authDomain: "e-commerce-react-54566.firebaseapp.com",
  projectId: "e-commerce-react-54566",
  storageBucket: "e-commerce-react-54566.appspot.com",
  messagingSenderId: "860006258984",
  appId: "1:860006258984:web:aafbc1ccdd9761fb59181d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

