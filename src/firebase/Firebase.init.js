// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgYX19l6-ZFmM5QmznsNhIQWbxIOQeZXs",
  authDomain: "fir-form-control.firebaseapp.com",
  projectId: "fir-form-control",
  storageBucket: "fir-form-control.firebasestorage.app",
  messagingSenderId: "422458644812",
  appId: "1:422458644812:web:c165b063e2198bf9a257e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;