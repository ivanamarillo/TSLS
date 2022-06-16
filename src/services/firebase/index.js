// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd3LvBLdzdH-5wHKkpDDlJroV3WNc_fps",
  authDomain: "backend-tsls.firebaseapp.com",
  projectId: "backend-tsls",
  storageBucket: "backend-tsls.appspot.com",
  messagingSenderId: "427281297378",
  appId: "1:427281297378:web:a3eabbf6a6a736083dd3bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);