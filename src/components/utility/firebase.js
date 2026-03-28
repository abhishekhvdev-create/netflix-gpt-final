// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiGL09dptGXnzf0fDbuitfeb3LrJbj5DM",
  authDomain: "netflix-gpt-final.firebaseapp.com",
  projectId: "netflix-gpt-final",
  storageBucket: "netflix-gpt-final.firebasestorage.app",
  messagingSenderId: "782329651013",
  appId: "1:782329651013:web:8c5598c037fc635fd1a82c",
  measurementId: "G-D8Q24G0PMT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;
