// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS4Yd2FlEfD2COnbzTlgSPwhoBixuzmuI",
  authDomain: "healthyraho-dev.firebaseapp.com",
  projectId: "healthyraho-dev",
  storageBucket: "healthyraho-dev.appspot.com",
  messagingSenderId: "377284370922",
  appId: "1:377284370922:web:404a2036584ff02f2e1293",
  measurementId: "G-38VHNJYYHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("analytics", analytics);
export const auth = getAuth(app);
