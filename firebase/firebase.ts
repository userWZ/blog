// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// process.env.NEXT_PUBLIC_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: "AIzaSyAjOEGnBsv6GjtdQafOf9C0s64-rBbOVlA",
  authDomain: "wzh7076-f2b93.firebaseapp.com",
  projectId: "wzh7076-f2b93",
  storageBucket: "wzh7076-f2b93.appspot.com",
  messagingSenderId: "218784605198",
  appId: "1:218784605198:web:7d59277bb8215c5850485f",
  measurementId: "G-H2R15BD7XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);