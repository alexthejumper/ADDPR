import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY1ihys_4GWBck0IQKEnmhe6kXhBZ3_Vs",
    authDomain: "add-events-1407f.firebaseapp.com",
    projectId: "add-events-1407f",
    storageBucket: "add-events-1407f.firebasestorage.app",
    messagingSenderId: "510752673126",
    appId: "1:510752673126:web:b05470b24d7e0d010a0ca7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
