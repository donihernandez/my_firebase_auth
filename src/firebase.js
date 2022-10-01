// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTiOVFFLyl6qOFc7pncXBz4x0W7vqiJxA",
  authDomain: "my-firebase-auth-bc165.firebaseapp.com",
  projectId: "my-firebase-auth-bc165",
  storageBucket: "my-firebase-auth-bc165.appspot.com",
  messagingSenderId: "467945681822",
  appId: "1:467945681822:web:f51489d5070a165b379c8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app


