import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtlwoQ8wLT0MMiJjkGt9sjc6bK3DIRqh4",
  authDomain: "mattgpt-498f2.firebaseapp.com",
  projectId: "mattgpt-498f2",
  storageBucket: "mattgpt-498f2.appspot.com",
  messagingSenderId: "853392552771",
  appId: "1:853392552771:web:aa70e5bebfbe31d0b9b5f6",
  measurementId: "G-DQ0FSE7W9R",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig); //Use existing app if already initialized
const db = getFirestore(app);

export { db };
