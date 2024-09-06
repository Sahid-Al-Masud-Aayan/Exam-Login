// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgr0nsN0JO3v6uU6iszv2xFY2zZXapkOk",
  authDomain: "exam-448a7.firebaseapp.com",
  projectId: "exam-448a7",
  storageBucket: "exam-448a7.appspot.com",
  messagingSenderId: "524896048311",
  appId: "1:524896048311:web:edb1d27663ad078876e932",
  measurementId: "G-XKWPJPFXL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);