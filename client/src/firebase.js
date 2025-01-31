// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-72fa8.firebaseapp.com",
  projectId: "real-estate-72fa8",
  storageBucket: "real-estate-72fa8.firebasestorage.app",
  messagingSenderId: "464351725993",
  appId: "1:464351725993:web:139c1f3f2f964ede349cb8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);