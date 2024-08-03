// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp3MvySpKN044wuLBrfhdBRt2ck2e0o5s",
  authDomain: "pantrytracker-f450d.firebaseapp.com",
  projectId: "pantrytracker-f450d",
  storageBucket: "pantrytracker-f450d.appspot.com",
  messagingSenderId: "52506406489",
  appId: "1:52506406489:web:f924ea8ea984c6a9404b48",
  measurementId: "G-LXQNFBFSQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}