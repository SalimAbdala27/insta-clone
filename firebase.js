// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXD5JDIZ2ZyfTK3w6UveG-hx_MFB5ScSI",
  authDomain: "insta-clone-8337c.firebaseapp.com",
  projectId: "insta-clone-8337c",
  storageBucket: "insta-clone-8337c.appspot.com",
  messagingSenderId: "378795923149",
  appId: "1:378795923149:web:97bd420a3d8e58a4967b84"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};