// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChy2TkrJPUhLLeCbHLY7A3wOk33_RddzM",
  authDomain: "dragon-news-772e7.firebaseapp.com",
  projectId: "dragon-news-772e7",
  storageBucket: "dragon-news-772e7.appspot.com",
  messagingSenderId: "539690647488",
  appId: "1:539690647488:web:2920a1560ace7fae98d225",
  measurementId: "G-ZJSD22NM2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export default app;