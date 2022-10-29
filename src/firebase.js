// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCtN1if6BQrEwpDLlIUfdsZ2j-d_9sTknk",
    authDomain: "gip-6it.firebaseapp.com",
    projectId: "gip-6it",
    storageBucket: "gip-6it.appspot.com",
    messagingSenderId: "543895410606",
    appId: "1:543895410606:web:7fe9ab0b20102d0f921a3f"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);