// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVTYdSHDHKm_piK_yU3ywF_HJGk_MgBkY",
    authDomain: "wines-1ee01.firebaseapp.com",
    projectId: "wines-1ee01",
    storageBucket: "wines-1ee01.appspot.com",
    messagingSenderId: "194386760111",
    appId: "1:194386760111:web:69f697caefeb43081ddf5a",
    measurementId: "G-KQZ5N94ZP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)