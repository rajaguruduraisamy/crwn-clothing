// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUpffqwRFOUE9j3mtVCUhPPQcNK6dZ7ng",
  authDomain: "crwn-db-e7cf1.firebaseapp.com",
  projectId: "crwn-db-e7cf1",
  storageBucket: "crwn-db-e7cf1.appspot.com",
  messagingSenderId: "1080656751716",
  appId: "1:1080656751716:web:6fa6955bb7f8ca0fa70371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
