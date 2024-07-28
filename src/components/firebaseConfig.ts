import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration (replace with your actual config values)
const firebaseConfig = {
    apiKey: "AIzaSyBgak0j479rNxF3vJ3ApUj_F4GJ6Gfxzkk",
    authDomain: "tailoring-inventory-3caf2.firebaseapp.com",
    projectId: "tailoring-inventory-3caf2",
    storageBucket: "tailoring-inventory-3caf2.appspot.com",
    messagingSenderId: "346419643218",
    appId: "1:346419643218:web:1233cc6ea89e28ddf4f08b"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
