// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APPapiKey,
  authDomain: process.env.REACT_APPauthDomain,
  projectId: process.env.REACT_APPprojectId,
  storageBucket: process.env.REACT_APPstorageBucket,
  messagingSenderId: process.env.REACT_APPmessagingSenderId,
  appId: process.env.REACT_APPappId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
