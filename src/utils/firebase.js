// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClzSNrwDzAuAkDaN8qqev9TbjiixZMP-c",
  authDomain: "proyecto-coder-5d7ad.firebaseapp.com",
  projectId: "proyecto-coder-5d7ad",
  storageBucket: "proyecto-coder-5d7ad.firebasestorage.app",
  messagingSenderId: "218102267554",
  appId: "1:218102267554:web:5e418197914386307c61fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

